const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    repaymentType:{
        type:String,
        enum:['I&P', "Ionly"]
    }, 
    LVR:{
        min:Number,
        max:Number
    },
    loanPurpose : {
        type:String,
        enum:['owned', "invest"]
    },
    rateType:{
        type:String,
        enum:['fixed', 'variable']
    },
    term : Number,
    fee:{
        ongoing:Boolean,
        upfront:Boolean
    },
    agae:{
        min:Number,
        max:Number
    },
    loanAmount:{
        max:Number,
        min:Number
    },
    features:[String]
});


module.exports = mongoose.models.User || mongoose.model('product', UserSchema);