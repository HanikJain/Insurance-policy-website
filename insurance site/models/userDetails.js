const mongoose = require('mongoose');
const {userTransactionSchema} = require('./userTransactions');
const {userSchema} = require('./user');

const userDetailsSchema = new mongoose.Schema({
    name : {type: String},
    userId : {type: String},
    date : {type: Date, default: Date.now},
    email : {type: String},
    transactions : { type : Array , "default" : [] }
});


const userDetails = mongoose.model('userDetails', userDetailsSchema);

module.exports = {userDetails};