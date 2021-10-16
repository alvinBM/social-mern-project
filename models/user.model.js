/**
 * USER MODEL
 */
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    lastname : {type : String, required : true},
    sexe : {type : String, required : false},
    phone : {type : String, required : true},
    email : {type : String, require : false},
    password : {type : String, require : true}
});

module.exports = mongoose.model("User", userSchema);