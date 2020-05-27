const db = require ("../models");
const passport = require ("passport");
const router = require ("express").Router();

var returnData = {};

router.post("/login", (req, res, next) => {
    passport.authenticate("local-login", (err, user, next) => {
        if (err) return next (err)

        if (!user) {
            returnData = {
                message = "User Not Found!"
            }
            res.json(returnData)
        }

        req.login(user, (err) => {
            console.log("\nUser");
            console.log(user)

            returnData = {
                message = "Successfully Logged In"
            }

            return res.json(returnData)
        })
    }) (req, res, next)
})

router.post("/signup", (req, res, next) => {
    console.log("Sign Up")
    console.log(req.body)

    passport.authenticate("local-signup", (err, user) => {
        if (err) return next (err)

        if (!user) {
            console.log("User Already Exists");
            returnData = {
                message: "User Already Ecists!"
            }
            return res.json(returnData)
        }
        if (user) {
            console.log("\nUser Created");
            returnData = {
                message: "Successfully Created User!"
            }
            res.json(returnData)
        }
    }) (req, res, next)
})

router.get("/logout", (req, res) => {

    req.logout()
    if(!req.user) {
        res.redirect("/")
    } else {
        console.log("Failed to logout")
    }
})

module.exports = router;