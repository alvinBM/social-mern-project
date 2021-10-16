const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config({path : "./config/.env"});
require("./config/db");

/** Requires all routes */
const userRoute = require("./routes/user.routes")



const app = express();

/** Set response header to allow same parameters */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

/** Set body parser pour gerer les body envoyé par les requetes */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


/** Define all route */
/*****-------------------------------------- */
app.get('/', (req, res) => {
    res.status(200).send({
        status : 200,
        message : 'Welcome Social MERN PROJECT'});
});

app.use("/api/user", userRoute);



module.exports = app;