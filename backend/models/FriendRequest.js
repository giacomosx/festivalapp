const mongoose = require('mongoose')

const FriendRequestSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        receiverId: {
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
    },
    {
        timestamps: true,
        strict: true
    }
);


module.exports = mongoose.model('FriendRequest', FriendRequestSchema, 'friendRequests');
