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

const subScribeEvent = async (req, res) => {
    const { userId } = req.user
    const { id } = req.params

    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(401).json({message: 'Invalid User Id!'})
        }
        if(user.events.includes(id)) {
            return res.status(401).json({message: 'Event already subscribed!'})
        }

        const eventSubScribed = await Event.findById(id)
        if(!eventSubScribed){
            return res.status(401).json({message: 'Event doesn\'t exist!'})
        }

        eventSubScribed.participants.push(userId)
        user.events.push(id)

        await eventSubScribed.save()
        await user.save()

        res.status(200).json({eventSubScribed, user})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const unSubScribeEvent = async (req, res) => {
    const { userId } = req.user
    const { id } = req.params

    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(401).json({message: 'Invalid User Id!'})
        }
        if(!user.events.includes(id)) {
            return res.status(401).json({message: 'Event already unsubscribed!'})
        }

        const eventUnSubScribed = await Event.findById(id)
        if(!eventUnSubScribed){
            return res.status(401).json({message: 'Event doesn\'t exist!'})
        }

        eventUnSubScribed.participants.pull(userId)
        user.events.pull(id)

        await eventUnSubScribed.save()
        await user.save()

        res.status(200).json({eventUnSubScribed, user})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const addActToEvent = async (req, res) => {
    const { userId, role } = req.user
    const { id } = req.params

    if (!userId || role === 'user') {
        return res.status(401).json({message: 'Unauthorized to adding acts!'})
    }

    try {
        const event = await Event.findById(id)
        if(!event){
            return res.status(401).json({message: 'Event doesn\'t exist!'})
        }

        event.acts.push(req.body)

        await event.save()

        res.status(200).json({event})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

module.exports = {
    getAllEvents,
    createEvent,
    subScribeEvent,
    unSubScribeEvent,
    addActToEvent
}