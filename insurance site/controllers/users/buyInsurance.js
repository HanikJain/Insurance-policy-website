const {userTransaction} = require('../../models/userTransactions');
const {userDetails} = require('../../models/userDetails');
const {a} = require('./register');


let user_transaction = []
const buyInsuranceRouter = function (req, res) {
    const {insurance, year, amount} = req.body;
    user_transaction.push({insurance, year, amount});
    res.redirect('/payment');
}

const paymentRouter = function (req, res) {
    let transaction = new userTransaction({
        policyType : user_transaction[0].insurance,
        duration : user_transaction[0].year,
        amount : user_transaction[0].amount,
        premium : Math.round((user_transaction[0].amount)/(user_transaction[0].year)),
        premium_count : user_transaction[0].year - 1
    });
     
    transaction.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            // console.log(result)
            let email = a.email;
            console.log(email, "line 29");
            console.log(transaction, "line 30");
            
            userDetails.findOneAndUpdate({email: email}, { "$push": { "transactions": transaction } }, function (err, managerparent) {
                    if (err) throw err;
                    // console.log(managerparent,"line 31 in buyInsurance file");
            })
            res.redirect('/dashboard');
        }
    })
    
    
}


module.exports = {buyInsuranceRouter, user_transaction, paymentRouter};