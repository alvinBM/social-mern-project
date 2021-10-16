/**
 * USER MODEL
 */
const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    lastname : {type : String, required : true},
    sexe : {type : String, required : false},
    phone : {type : String, required : true, unique : true},
    email : {type : String, require : false, unique : true, lowercase : true, validate : [isEmail]},
    password : {type : String, require : true},
    followers : {type : [String]},
    following : {type : [String]},
    likes : {type : [String]}
},{
    timestamps : true
});

module.exports = mongoose.model("User", userSchema);