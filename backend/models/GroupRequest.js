const mongoose = require('mongoose')

const GroupRequestSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'accepted', 'rejected'],
            default: 'pending',
            required: true,
        },
        message: {
            type: String,
        },
        group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group',
        }
    },
    {
        timestamps: true,
        strict: true
    }
);


module.exports = mongoose.model('GroupRequest', GroupRequestSchema, 'grouprequests');
