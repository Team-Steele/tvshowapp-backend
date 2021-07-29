
const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema(
    {
        user: String,
           
        
        tvShows: [String]
    }
)

const User = mongoose.model('User', UserSchema)
module.exports = User
