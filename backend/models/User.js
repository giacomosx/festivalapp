const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true
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
        role: {
            type: String,
            enum: ['admin', 'user', 'editor'],
            default: 'user',
        },
        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organization'
        },
        groups: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group'
        }],
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

module.exports = mongoose.model('User', UserSchema, 'users');