const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        members: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'User'
        }],
        events: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
        }],
    },
    {
        timestamps: true,
        strict: true,
    })

OrganizationSchema.index({name: 1, email: 1, phone: 1, owner: 1}, )

module.exports = mongoose.model('Organization', OrganizationSchema, 'organizations');