const Group = require('../models/group');
const User = require("../models/User");

const createGroup = async (req, res) => {
    const {body, user: {userId}} = req;

    try {
        const owner = await User.findById(userId);
        if (!owner) {
            return res.status(400).json({message: 'Invalid user Id'});
        }

        const newGroup = new Group({
            ...body,
            owner: userId
        })

        owner.groups.push(newGroup);
        newGroup.members.push(owner);

        await newGroup.save();
        await owner.save();

        return res.status(201).json(newGroup);
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find({})

        return res.status(200).json(groups)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const getGroupByID = async (req, res) => {
    const {id} = req.params
    try {
        const group = await Group.findById(id)
        if (!group) {
            return res.status(404).json({message: 'Group not found'})
        }

        return res.status(200).json(group)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const deleteGroup = async (req, res) => {
    const {params: {id}, user: {userId}} = req

    try {
        const owner = await User.findById(userId)
        if (!owner) {
            return res.status(404).json({message: 'Invalid user Id'})
        }

        const group = await Group.findById(id)
        if (!group) {
            return res.status(404).json({message: 'Group not found'})
        }

        const isOwner = group.owner.toString() === userId

        if (!isOwner) {
            return res.status(401).json({message: 'Unauthorized to delete group'})
        }

        await Group.findByIdAndDelete(id)
        owner.groups.pull(group)
        await owner.save()

        return res.status(200).json({message: 'Group deleted'})

    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const updateGroup = async (req, res) => {
    const {params: {id}, user: {userId}, body} = req

    try {
        const owner = await User.findById(userId)
        if (!owner) {
            return res.status(404).json({message: 'Invalid user Id'})
        }

        let group = await Group.findById(id)
        if (!group) {
            return res.status(404).json({message: 'Group not found'})
        }

        const isOwner = group.owner.toString() === userId

        if (!isOwner) {
            return res.status(401).json({message: 'Unauthorized to update group'})
        }

        group = await Group.findByIdAndUpdate(id, body, {new: true})

        return res.status(200).json({message: 'Group updated', group})

    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

module.exports = {
    createGroup,
    getAllGroups,
    getGroupByID,
    deleteGroup,
    updateGroup,
}
