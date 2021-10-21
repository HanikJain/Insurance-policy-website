const express = require('express');
const router = express.Router();
const {registerRoute} = require('../controllers/users/register');
const {loginRoute} = require('../controllers/users/login');


router.get('/login', function(req, res){
    res.render("login", {error :  false, error_msg : "", layout : false});
});

router.post('/login', loginRoute);

router.post('/register', registerRoute);

router.get('/register', function(req, res){
    res.render("register", {error :  false, error_msg : "", layout : false});
});


module.exports = router;