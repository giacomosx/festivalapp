const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        start_date: {
            type: String,
            required: true,
        },
        end_date: {
            type: String,
            required: true,
        },
        banner_image: {
            type: String,
            required: true,
            default: '',
        },
        acts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
        }],
        participants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organization',
            required: true,
        }
    },
    {
        timestamps: true,
        strict: true
    })

EventSchema.index({name: 1, description: 1, location: 1, start_date: 1})

module.exports = mongoose.model('Event', EventSchema, 'events');