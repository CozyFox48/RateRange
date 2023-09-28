const axios = require('axios');
const dbConnect = require("./../../server/dbConnect");
const Product = require("./../../server/model/product");
const digitalEligibility = ["MAX_AGE", "MIN_AGE", "MIN_INCOME", "MIN_TURNOVER"];

async function fetchData() {
    await dbConnect();

    try {
        const productsList = await Product.find({}, "mainInfo bankUrl");
        let errorList = [];
        for (const eachProduct of productsList) {
            let response;
            const url = `${eachProduct.bankUrl}/cds-au/v1/banking/products/${eachProduct.mainInfo.productId}`;
            console.log(url);

            try {
                response = await axios.get(url, {
                    headers: {
                        'x-v': '4',
                        'Accept': 'application/json', // Replace with the correct media type
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                });
            } catch (error) {
                errorList.push(url);
                if (error.response) {
                    console.log(error.response.data.errors)
                } else {
                    console.log(error.response);
                }
                continue;
            }

            try {
                const productsDetail = response.data.data;
                // console.log("productsDetail",productsDetail)
                if (Object.keys(productsDetail).length > 0) {
                    try {
                        if (productsDetail.eligibility && productsDetail.eligibility.length > 0) {
                            productsDetail.eligibility = productsDetail.eligibility.filter(item => {
                                const isDigit = digitalEligibility.includes(item.eligibilityType);
                                if (isDigit) {
                                    productsDetail[item.eligibilityType] = item.additionalValue;
                                    flag = true;
                                }
                                return !isDigit;
                            })
                        }

                        const productDoc = new Product(eachProduct); // Convert eachProduct to a Mongoose document
                        await Product.updateOne({ _id: eachProduct._id }, { ...productDoc.toObject(), ...productsDetail });
                    } catch (error) {
                        console.log(error)
                    }
                }
            } catch (error) {
                console.log(error);
                continue;
            }

        }
        console.log(errorList);
    } catch (error) {
        console.error(error);
    }
}

fetchData();