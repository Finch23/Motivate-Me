const bCrypt = require("bcrypt-nodejs");
const passport = require("passport");

module.exports = function(passport, user) {
  let User = user;
  const LocalStrategy = require("passport-local").Strategy;
  passport.serializeUser( (user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser( (id, done) => {
    User.findByPk(id).then( (user) => {
      if(user){
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
  passport.use("local-signup", new LocalStrategy(
    {
      usernameField : "email",
      passwordField : "password",
      passReqToCallback : true
    },
    (req, email, password, done) => {
      let generateHash = (password) => {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      User.findOne({
        where: {
          email: email
        }
      }).then( (user) => {
        if(user) {
          return done(null, false, { message : "That email is already taken" });
        } else {
          let userPassword = generateHash(password);
          let data = {
            email: email,
            password: userPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname
          };
          User.create(data).then( (newUser, created) => {
            if(!newUser) {
              return done(null,false);
            }
            if(newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));
  
  passport.use("local-signin", new LocalStrategy(
    {
      usernameField : "email",
      passwordField : "password",
      passReqToCallback : true
    },
    (req, email, password, done) => {
      let User = user;
      let isValidPassword = (userpass,password) => {
        return bCrypt.compareSync(password, userpass);
      };
      User.findOne({
        where : {
          email: email
        }
      }).then( (user) => {
        if (!user) {
          return done(null, false, { message: "Email does not exist" });
        }
        if (!isValidPassword(user.password,password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        let userinfo = user.get();
        return done(null,userinfo);
      }).catch( (err) => {
        console.log("Error:",err);
        return done(null, false, { message: "Something went wrong with your Signin" });
      });
    }
  ));
};