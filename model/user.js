const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    name : {type: String, required: true},
    googleId : String,
    email: String


});





module.exports = mongoose.model('User', userSchema);