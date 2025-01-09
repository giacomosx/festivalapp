const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    schedule: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    }]
},{
    timestamps: true,
})

GroupSchema.index({name: 1, description: 1} )

module.exports = mongoose.model('Group', GroupSchema, 'groups')