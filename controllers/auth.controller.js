const userModel = require("../models/user.model");


module.exports.signUp = async (req, res) => {
    const {name, lastname, phone, password} = req.body;
    try{
        const user = await userModel.create({name, lastname, phone, password});
        res.status(200).json({
            code : 200,
            user : user,
            description : "User created successfully"
        })
    }
    catch(err){
        console.log("Erreur registered ==> ", err)
        res.status(200).json({
            code : 400,
            description : "An error has occured!"
        })
    }
}