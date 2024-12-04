const mongoose = require('mongoose')

const InboxSchema = new mongoose.Schema(
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
        message: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        strict: true
    }
);


module.exports = mongoose.model('Inbox', InboxSchema, 'inboxes');
