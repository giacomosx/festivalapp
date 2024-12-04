const FriendRequest = require('../models/FriendRequest');
const User = require('../models/User');
const {getUserById} = require("./user");

const addFriendRequest = async (req, res) => {
    const { userId } = req.user;
    const { id } = req.params;

    try {
        const receiverUser = await User.findById(id)
        if (!receiverUser) {
            return res.status(400).json('Invalid receiver Id')
        }
        if (receiverUser.friends.includes(id)) {
            return res.status(400).json({message: 'You are already friends!'})
        }

        const request = await FriendRequest.find({
            receiverId: id,
            status: 'pending'
        })
        if (request.length > 0) {
            return res.status(401).json({message: 'You are just make a request!'})
        }
        console.log(request)

        const newFriendRequest = await new FriendRequest({
            ...req.body,
            senderId: userId,
            receiverId: id,
        });
        await newFriendRequest.save();

        return res.status(200).json({newFriendRequest})
    } catch (e) {
        console.error(e);
        res.status(500).json({message: e.message});
    }
}

const friendRequestResponse = async (req, res) => {
    const { id } = req.params;
    const { response } = req.body;

    try {
        const request = await FriendRequest.findByIdAndUpdate(id, {status: response}, {new: true})

        return res.status(200).json({request})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const getReceivedRequest = async (req, res) => {
    const { userId } = req.user;

    try {
        const requests = await FriendRequest.find({
            receiverId: userId
        })

        return res.status(200).json(requests)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const getSentRequest = async (req, res) => {
    const { userId } = req.user;

    try {
        const requests = await FriendRequest.find({
            senderId: userId
        })

        return res.status(200).json(requests)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}


module.exports = {
    addFriendRequest,
    friendRequestResponse,
    getReceivedRequest,
    getSentRequest,
}