


const express = require("express");
const app = express();
const db = require('./models');
const routes = require ('./routes');
const passport = require ('passport');
const session = require ('express-session');
 
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    options = {
        host: process.env.HOST,
        port: 3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB
    }
} else {
    options = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: "",
        database: ''
    }
}

app.use(express.static(__dirname + '/client/build'));

app.use(routes);

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});