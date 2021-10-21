const express = require('express');
const router = express.Router();
const  {ensureAuthenticated} = require('../config/auth');
const {buyInsuranceRouter, paymentRouter} = require('../controllers/users/buyInsurance');

// home page
router.get('/', function(req, res){
    if(req.isAuthenticated()){
        res.render('home', {layout:false, login:false}); 
    }
    else{
        res.render('home', {layout:false, login:true});
    }
});

//dashboard page
router.get('/dashboard', ensureAuthenticated,function(req, res){
        res.render('dashboard', {layout:false});
});


// contact page
router.get('/contactus', function(req, res){
    res.render('contact', {layout:false});
});

// buy insurance
router.get('/buyinsurance', ensureAuthenticated, function(req, res){
    res.render('buyInsurance', {layout:false});
});

router.post('/buyinsurance', ensureAuthenticated, buyInsuranceRouter )

// payment page
router.get('/payment', ensureAuthenticated, function(req, res){
    res.render('payment', {layout:false});
});

router.post('/payment', ensureAuthenticated, paymentRouter);


// logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })
  



module.exports = router;