const GroupRequest = require("../models/GroupRequest");
const User = require('../models/User');
const Group = require("../models/group");


const inviteUserToGroup = async (req, res) => {
    const {params: {id}, user: {userId}, body} = req
    const {groupId} = body

    if (!groupId) {
        return res.status(404).json({message: 'Group id not found'})
    }

    try {
        const owner = await User.findById(userId)
        if (!owner) {
            return res.status(404).json({message: 'Invalid user Id'})
        }

        const group = await Group.findById(groupId)
        if (!group) {
            return res.status(404).json({message: 'Group not found'})
        }

        const isOwner = group.owner.toString() === userId

        if (!isOwner) {
            return res.status(401).json({message: 'Unauthorized to invite users for this group'})
        }

        const requests = await GroupRequest.find({
            recipient : id,
            status: 'pending',
        })

        if (requests.length > 0) {
            return res.status(401).json({message: 'You have already sent an invite request'})
        }

        const newRequest = new GroupRequest({
            recipient: id,
            sender: userId,
            group: groupId,
            message: `You are invited to a group with ${owner.username} for this group: ${group.name}`,
        })

        await newRequest.save()


        return res.status(200).json({message: 'User invited', newRequest})

    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}


const groupRequestResponse = async (req, res) => {
    const {params: {id}, user: {userId}, body} = req
    const {response} = body

    if (!id) {
        return res.status(404).json({message: 'Missing recipient id'})
    }

    if (!response) {
        return res.status(404).json({message: 'Missing response!'})
    }

    try {
        const recipient = await User.findById(userId)
        if (!recipient) {
            return res.status(404).json({message: 'Invalid user Id'})
        }

        const request = await GroupRequest.findByIdAndUpdate(id, {status : response}, {new:true})
        if (!request) {
            return res.status(404).json({message: 'Request not found'})
        }

        const isAuthorized = request.recipient.toString() === userId
        if (!isAuthorized) {
            return res.status(401).json({message: 'Unauthorized to change request status'})
        }

        if (response === 'accepted') {
            const group = await Group.findById(request.group)
            group.members.push(userId)
            recipient.groups.push(group)
            await group.save()
            await recipient.save()
        }

        return res.status(200).json({message: 'Response sent', request})

    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const getReceivedGroupRequest = async (req, res) => {
    const {userId} = req.user;

    try {
        const requests = await GroupRequest.find({
            recipient: userId,
            status: 'pending'
        }).populate('sender group')

        return res.status(200).json(requests)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const getSentGroupRequest = async (req, res) => {
    const {userId} = req.user;

    try {
        const requests = await GroupRequest.find({
            sender: userId,
            status: 'pending'
        }).populate('recipient')

        return res.status(200).json(requests)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}


module.exports = {
    inviteUserToGroup,
    groupRequestResponse,
    getReceivedGroupRequest,
    getSentGroupRequest,
}