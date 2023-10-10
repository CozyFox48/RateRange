const axios = require('axios');
const dbConnect = require("./../../server/dbConnect");
const Product = require("./../../server/model/product");
const digitalEligibility = ["MAX_AGE", "MIN_AGE", "MIN_INCOME", "MIN_TURNOVER"];
const Aggregate_mortgage = require("./../../server/model/search_mortgage");
const iso8601Duration = require('iso8601-duration');


async function fetchData() {
    await dbConnect();

    try {
        const productsList = await Product.find({}, "mainInfo bankUrl bank");
        await Aggregate_mortgage.deleteMany({});

        let errorList = [];
        for (const eachProduct of productsList) {
            let response;
            const url = `${eachProduct.bankUrl}/cds-au/v1/banking/products/${eachProduct.mainInfo.productId}`;
            // console.log(url);

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

                        // save search Data

                        let pre_config = {}
                        if ("fees" in productsDetail) {
                            for (const fee of productsDetail["fees"]) {
                                if (fee["feeType"] == "UPFRONT" && Number(fee["amount"]) > 0) {
                                    pre_config["fee_upfront"] = true;
                                }
                                if ((fee["feeType"] == "PERIODIC" && Number(fee["amount"]) > 0) ||
                                    (fee["feeType"] == "TRANSACTION" && Number(fee["amount"]) > 0) ||
                                    (fee["feeType"] == "VARIABLE" && Number(fee["amount"]) > 0)) {
                                    pre_config["fee_ongoing"] = true;
                                }
                            }
                        }

                        // console.log("fee", pre_config, productsDetail["fees"]);



                        // if (Number(productsDetail["MAX_AGE"]) > 0) {
                        //     pre_config["age_max"] = Number(productsDetail["MAX_AGE"]);
                        // }

                        // if (Number(productsDetail["MIN_AGE"]) > 0) {
                        //     pre_config["age_min"] = Number(productsDetail["MIN_AGE"]);
                        // }
                        // console.log("age", pre_config, productsDetail["eligibility"]);

                        if ("constraints" in productsDetail) {
                            for (let constraint of productsDetail.constraints) {
                                if (constraint.constraintType === "MAX_LIMIT" || constraint.constraintType === "MAX_BALANCE") {
                                    if (Number(constraint.additionalValue) > 0) {
                                        pre_config["loanAmount_max"] = Number(constraint.additionalValue)
                                    }
                                }
                                if (constraint.constraintType === "MIN_LIMIT" || constraint.constraintType === "MIN_BALANCE") {
                                    if (Number(constraint.additionalValue) > 0) {
                                        pre_config["loanAmount_min"] = Number(constraint.additionalValue)
                                    }
                                }
                            }
                        }
                        // console.log("loanAmount", pre_config, productsDetail.constraints);

                        if ("features" in productsDetail) {
                            for (const feature of productsDetail.features) {
                                if (feature.featureType === "OFFSET") {
                                    pre_config["feature_offset"] = true
                                }
                                if (feature.featureType === "REDRAW") {
                                    pre_config["feature_redraw"] = true
                                }
                                if (feature.featureType === "EXTRA_REPAYMENTS") {
                                    pre_config["feature_extra"] = true
                                }
                                if (feature.featureType === "CASHBACK_OFFER") {
                                    pre_config["feature_cashback"] = true
                                }
                            }
                        }
                        // console.log("features", pre_config, productsDetail.features)
                        if ("lendingRates" in productsDetail){
                            for (let i = 0; i < productsDetail.lendingRates.length; i++) {
                                const eachRate = productsDetail.lendingRates[i];
                                let aggregate_result = {};
                                aggregate_result["bank"] = eachProduct.bank;
                                aggregate_result["product_refer"] = eachProduct._id;
                                aggregate_result["id"] = i;
    
                                if ("tiers" in eachRate) {
                                    for (const tier of eachRate["tiers"]) {
                                        if (tier["name"].toUpperCase().indexOf("LVR") !== -1 && tier["unitOfMeasure"] === "PERCENT") {
                                            if ("minimumValue" in tier && Number(tier["minimumValue"]) > 0) {
                                                if (parseFloat(tier["minimumValue"]) <= 1) {
                                                    aggregate_result["LVR_min"] = parseFloat(tier["minimumValue"]) * 100;
                                                } else {
                                                    aggregate_result["LVR_min"] = parseFloat(tier["minimumValue"]);
                                                }
                                            }
                                            if ("maximumValue" in tier && Number(tier["maximumValue"]) > 0) {
                                                if (parseFloat(tier["maximumValue"]) <= 1) {
                                                    aggregate_result["LVR_max"] = parseFloat(tier["maximumValue"]) * 100;
                                                } else {
                                                    aggregate_result["LVR_max"] = parseFloat(tier["maximumValue"]);
                                                }
                                            }
                                        }
                                    }
                                }
    
                                if (eachRate["lendingRateType"] === "FIXED" && "additionalValue" in eachRate && eachRate["additionalValue"] !== null) {
                                    try {
                                        const durationObject = iso8601Duration.parse(eachRate["additionalValue"]);
                                        const { years, months } = durationObject;
                                        aggregate_result["period"] = years * 12 + months;
                                    } catch (error) {
                                        console.log("Hey, this is error while calculating period");
                                    }
                                }
    
                                if (eachRate.repaymentType === 'INTEREST_ONLY') {
                                    aggregate_result["repaymentType"] = "Ionly";
                                } else if (eachRate.repaymentType === 'PRINCIPAL_AND_INTEREST') {
                                    aggregate_result["repaymentType"] = "I&P";
                                }
    
                                if (eachRate.loanPurpose === 'INVESTMENT') {
                                    aggregate_result["loanPurpose"] = "invest";
                                } else if (eachRate.loanPurpose === 'OWNER_OCCUPIED') {
                                    aggregate_result["loanPurpose"] = "owned";
                                }
    
                                if (eachRate.lendingRateType === 'VARIABLE') {
                                    aggregate_result["rateType"] = "variable";
                                } else if (eachRate.lendingRateType === 'FIXED') {
                                    aggregate_result["rateType"] = "fixed";
                                }
    
                                // console.log("rate", aggregate_result, eachRate);
    
                                Aggregate_mortgage.create({
                                    ...aggregate_result,
                                    ...pre_config
                                })
    
                            }
                        }

                        


                        const productDoc = new Product(eachProduct); // Convert eachProduct to a Mongoose document
                        Product.updateOne({ _id: eachProduct._id }, { ...productDoc.toObject(), ...productsDetail });
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