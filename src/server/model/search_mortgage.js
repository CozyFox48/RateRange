const mongoose = require('mongoose');
const treatString2Number = (value) => {
    let result = null;
    try {
        if (typeof value === 'string') {
            result = Number(value);

            if (isNaN(result)) {
                result = null;
            } else if (result > 1) {
                result = result / 100;
            }
        }
    } catch (error) {
        result = null;
    }
    return result;
}
const MortgageSearchIndexSchema = new mongoose.Schema({
    bank: {
        type: mongoose.Schema.Types.ObjectId,
        refer: 'bank'
    },
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
    product_refer: {
        type: mongoose.Schema.Types.ObjectId,
        refer: 'product'
    },
    id: Number,
    repaymentType: {
        type: String,
        enum: ['I&P', "Ionly"]
    },
    LVR_min: Number,
    LVR_max: Number,
    loanPurpose: {
        type: String,
        enum: ['owned', "invest"]
    },
    rateType: {
        type: String,
        enum: ['fixed', 'variable']
    },
    period: Number,
    fee_ongoing: Boolean,
    fee_upfront: Boolean,
    age_min: Number,
    age_max: Number,
    loanAmount_max: Number,
    loanAmount_min: Number,
    feature_offset: Boolean,
    feature_redraw: Boolean,
    feature_extra: Boolean,
    feature_cashback: Boolean
});

module.exports = mongoose.models.search_mortgage || mongoose.model('search_mortgage', MortgageSearchIndexSchema);