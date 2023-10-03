const axios = require('axios');
const dbConnect = require("./../../server/dbConnect");
const Bank = require("./../../server/model/bank");
const Product = require("./../../server/model/product");

async function fetchData() {
    await dbConnect();

    try {
        const banksList = await Bank.find({}, 'brandName publicBaseUri');
        let errorBank = [];
        for (const eachBank of banksList) {
            let response;
            const url = `${eachBank.publicBaseUri}/cds-au/v1/banking/products?effective=CURRENT&product-category=RESIDENTIAL_MORTGAGES`;
            console.log(url);

            try {
                response = await axios.get(url, {
                    headers: {
                        'x-v': '3',
                        'Accept': 'application/json', // Replace with the correct media type
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                });

            } catch (error) {
                errorBank.push(url);
                if (error.response) {
                    console.log("Error while fetching data/n", error.response.data.errors)
                } else {
                    console.log("Error while fetching data/n",error.response);
                }
                continue;
            }

            try {
                const productsList = response.data.data.products;
                if (productsList !== undefined && Array.isArray(productsList) && productsList.length > 0) {
                    for (const eachProduct of productsList) {
                        try {
                            const existing = await Product.findOne({ 'mainInfo.productId': eachProduct.productId });
                            if (existing) {
                                const productDoc = new Product(existing);
                                Product.updateOne({ _id: existing._id },
                                    {
                                        ...productDoc.toObject(),
                                        mainInfo: { ...eachProduct },
                                        bank: eachBank._id,
                                        bankUrl: eachBank.publicBaseUri
                                    });
                            } else {
                                Product.create(
                                    {
                                        mainInfo: { ...eachProduct },
                                        bank: eachBank._id,
                                        bankUrl: eachBank.publicBaseUri
                                    });
                            }
                        } catch (error) {
                            console.log("Error while operating mongodb",error)
                            continue;
                        }
                    }
                }

            } catch (error) {
                console.log("Error while operating products",error);
                continue;
            }

        }
        console.log(errorBank);
    } catch (error) {
        console.error(error);
    }
}

fetchData();