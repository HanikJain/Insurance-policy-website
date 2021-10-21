const mongoose = require('mongoose');

const userTransactionSchema = new mongoose.Schema({
    // email:  {type:String},
    date : {type: Date, default: Date.now},
    policyType : {type:String, required: true},
    duration : {type:Number, required: true},
    amount : {type:Number, required: true},
    premium : {type:Number, required: true},
    premium_count : {type:Number, required: true}
});


const userTransaction = mongoose.model('userTransaction', userTransactionSchema);

module.exports = {userTransaction, userTransactionSchema};

