const Event = require('../models/Event');
const User = require('../models/User');

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('owner');

        return res.status(200).json(events)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
}

const createEvent = async (req, res) => {
    const { userId, role } = req.user

    if (!userId || role === 'user') {
        return res.status(401).json({message: 'Unauthorized to create event!'})
    }

    try {
        const creator = await User.findById(userId)

        if (!creator.organization) {
            return res.status(401).json({message: 'I must be a part of an organization!'})
        }

        const newEvent = new Event({
            ...req.body,
            owner: creator.organization,
        })
        await newEvent.save()

        return res.status(200).json(newEvent)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

module.exports = {
    getAllEvents,
    createEvent,
}