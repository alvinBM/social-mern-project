const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://root:root@cluster0.ymbo8.mongodb.net/social-project",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("CONNECTE TO MONGO DB")
    }).catch((error) => {
        console.log("INPOSIIBLE DE SE CONNECTER A LA BD : ", error)
    })