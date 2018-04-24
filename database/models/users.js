 const mongoose = require("mongoose")

const validateEmail = function (email) {
    const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email_regex.test(email)
};
 
 const UsersDB = mongoose.model("User", {
     username: {
         type: String,
         trim: true,
         unique: true,
         required: 'Username is required',
    },
     password: {
         type: String,
         trim: true,
         required: 'password is required',
     },
     email: {
         type: String,
         trim: true,
         lowercase: true,
         unique: true,
         required: 'Email address is required',
         validate: [validateEmail, 'Please fill a valid email address'],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
     }
})

module.exports = UsersDB;

