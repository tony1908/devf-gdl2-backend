 const mongoose = require("mongoose")
 
 const UsersDB = mongoose.model("User", {
    username: String,
    password: String,
    email: String
})

module.exports = UsersDB;

