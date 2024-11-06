const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,    
        required: true
    },
    bio: {
        type: String, 
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    phone_number: {
        type: String,    
    },
    admin: {
        type: Boolean,
        default: false
    },
    groups: Array,
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
    }],
    pinned_acts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Acts'
    }],
},
{
    timestamps: true,
    strict: true
}
)

module.exports = mongoose.model('User', UserSchema, 'user');