const mongoose = require('mongoose')

const InboxSchema = new mongoose.Schema(
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
