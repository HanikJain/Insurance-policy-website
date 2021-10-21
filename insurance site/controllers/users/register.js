const {User} = require('../../models/user');
const {userDetails} = require('../../models/userDetails');
const passport = require('passport');

const a = {email : ""};

const registerRoute = function (req, res) {
    const name = req.body.name;
    
    console.log(name);
    User.register({username : req.body.username}, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            res.render("register", {error :  true, error_msg : "Something went wrong", layout : false});
        }else{
            passport.authenticate("local")(req, res, function(){
                let newUser = new userDetails({
                    name: name, 
                    email: req.body.username
                })
                newUser.save(function(err){
                    if(err) 
                    console.log(err, "Error in saving user name ");
                })
                a.email = req.body.username;
                console.log(a, "line 26 register.js")
                res.redirect("/dashboard");
            })
        }
    })
}

// console.log(a, "line 33 register.js")
module.exports = {registerRoute, a};