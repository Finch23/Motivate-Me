const express = require("express");
const app = express();
const db = require('./models');
const passport = require ("passport");

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});