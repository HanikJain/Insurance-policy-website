const {User} = require('../../models/user');
const passport = require('passport');

const loginRoute = function (req, res){
    const user = new User({
        username : req.body.username,
        password : req.body.password
    });

    req.login(user, function(err){
        if(err) {
            console.log(err);
            // res.render("login", {error :  true, error_msg : "Wrong credentials", layout : false});
        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/dashboard");
            })
        }
    });
}

module.exports = {loginRoute};