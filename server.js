const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({path : "./config/.env"});
require("./config/db")

const userRoute = require("./routes/user.routes")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res, next) => {
    res.status(200).send({
        status : 200,
        message : 'Welcome Social MERN PROJECT'});
});

//Routes
app.use("/api/user", userRoute);


//Set Server
app.listen(process.env.PORT, () => {
    console.log("App listing on port " + process.env.PORT);
})