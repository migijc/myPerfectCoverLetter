const mongoose = require('mongoose');
require('dotenv').config()


const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    bio: String,
    website: String,
    twitter: String,
    facebook: String,
    instagram: String,
    dateJoined: Number,
    username: String,
    password: String,
});

const AuthorModel = mongoose.model('AuthorModel', authorSchema)

module.exports = AuthorModel;
      

