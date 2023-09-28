const mongoose = require('mongoose');

const treatString2Number = (value) => {
    let result = null;
    try {
        if (typeof value === 'string') {
            result = Number(value);
            if (isNaN(result)) {
                result = null;
            } 
        }
    } catch (error) {
        result = null;
    }
    return result;
}

const UserSchema = new mongoose.Schema({
    //primary
    mainInfo: {
        productId: {
            type: String,
            required: true
        },
        effectiveFrom: {
            type: Date,
        },
        effectiveTo: {
            type: Date,
        },
        lastUpdated: {
            type: Date,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        brandName: {
            type: String,
        },
        applicationUri: {
            type: String,
        },
        isTailored: {
            type: Boolean
        },
        title: {
            type: String
        }
    },
    MAX_AGE: {
        type: Number,
        set: function (value) {
            return treatString2Number(value);
        }
    },
    MIN_AGE: {
        type: Number,
        set: function (value) {
            return treatString2Number(value);
        }
    },
    MIN_TURNOVER: {
        type: Number,
        set: function (value) {
            return treatString2Number(value);
        }
    },
    MIN_INCOME: {
        type: Number,
        set: function (value) {
            return treatString2Number(value);
        }
    },

    // additionalInformation: {
    //     overviewUri: String,
    //     termsUri: String,
    //     eligibilityUri: String,
    //     feesAndPricingUri: String,
    //     bundleUri: String,
    //     additionalOverviewUris: [
    //         { additionalInfoUri: String }
    //     ],
    //     additionalTermsUris: [
    //         { additionalInfoUri: String }
    //     ],
    //     additionalEligibilityUris: [
    //         { additionalInfoUri: String }
    //     ],
    //     additionalFeesAndPricingUris: [
    //         { additionalInfoUri: String }
    //     ],
    //     additionalBundleUris: [
    //         { additionalInfoUri: String }
    //     ]
    // },
    imageUri: {
        type: String
    },
    //get from parent-bank
    bankName: {
        type: String
    },
    bankUrl: {
        type: String
    },
    //detail-fee
    // bundles: [{
    //     name: String,
    //     description: String,
    //     additionalInfo: String,
    //     additionalInfoUri: String,
    //     productIds: [String]
    // }],
    features: [{
        featureType: String,
        additionalValue: String,
        additionalInfo: String,
        additionalInfoUri: String
    }],
    constraints: [{
        constraintType: String,
        additionalValue: {
            type: Number,
            set: function (value) {
                return treatString2Number(value);
            }
        },
        // additionalInfo: String,
        // additionalInfoUri: String
    }],
    eligibility: [{
        eligibilityType: String,
        additionalValue: String,
        // additionalInfo: String,
        // additionalInfoUri: String
    }],
    fees: [{
        name: String,
        feeType: String,
        amount: {
            type: Number,
            set: function (value) {
                return treatString2Number(value);
            }
        },
        balanceRate: String,
        transactionRate: String,
        accruedRate: String,
        accrualFrequency: String,
        currency: String,
        additionalValue: String,
        additionalInfo: String,
        additionalInfoUri: String,
        discounts: [{
            description: String,
            discountType: String,
            amount: String,
            balanceRate: String,
            transactionRate: String,
            feeRate: String,
            additionalValue: String,
            additionalInfo: String,
            additionalInfoUri: String,
            eligibility: [{
                discountEligibilityType: String,
                additionalValue: String,
                additionalInfo: String,
                additionalInfoUri: String,
            }]
        }],
    }],
    // depositRates: [{
    //     depositRateType: String,
    //     rate: String,
    //     calculationFrequency: String,
    //     applicationFrequency: String,
    //     tiers: [{
    //         name: String,
    //         unitOfMeasure: String,
    //         minimumValue: Number,
    //         maximumValue: Number,
    //         rateApplicationMethod: String,
    //         applicabilityConditions: {
    //             additionalInfo: String,
    //             additionalInfoUri: String
    //         },
    //         additionalInfo: String,
    //         additionalInfoUri: String,
    //     }],
    //     additionalValue: String,
    //     additionalInfo: String,
    //     additionalInfoUri: String,
    // }],
    lendingRates: [{
        lendingRateType: String,
        rate: {
            type: Number,
            set: function (value) {
                return treatString2Number(value);
            }
        },
        comparisonRate: {
            type: Number,
            set: function (value) {
                return treatString2Number(value);
            }
        },
        calculationFrequency: String,
        applicationFrequency: String,
        interestPaymentDue: String,
        repaymentType: String,
        loanPurpose: String,
        tiers: [{
            name: String,
            unitOfMeasure: String,
            minimumValue: Number,
            maximumValue: Number,
            rateApplicationMethod: String,
            applicabilityConditions: {
                additionalInfo: String,
                additionalInfoUri: String
            },
            additionalInfo: String,
            additionalInfoUri: String,
        }],
        additionalValue: String,
        additionalInfo: String,
        additionalInfoUr: String,
    }]
});

module.exports = mongoose.models.User || mongoose.model('product', UserSchema);