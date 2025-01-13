const User = require('../models/User')

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId)

        if (!user) res.status(401).json('Invalid user Id')

        res.status(200).json(user)

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }

}

const getUserFriends = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).populate({
            path: 'friends',
            select: 'username avatar name ',
            options: {sort: {updatedAt: -1}}
        })

        if (!user) res.status(401).json('Invalid user Id')

        res.status(200).json(user)

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }

}

const getUserEvents = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).populate({
            path: 'events',
            select: 'name banner_image slug',
            options: {sort: {updatedAt: -1}}
        })

        if (!user) res.status(401).json('Invalid user Id')

        res.status(200).json(user)

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }

}

const getUserGroups = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).populate({
            path: 'groups',
            select: 'name description',
            options: {sort: {updatedAt: -1}}
        })

        if (!user) res.status(401).json('Invalid user Id')

        res.status(200).json(user)

    } catch (e) {
        return res.status(500).json({ message: e.message })
    }

}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const getUserByQuery = async (req, res) => {
    const { username } = req.query

    try {
        const users = await User.find({username: {$regex : username, $options: 'i'} }).limit(10)
        res.status(200).json(users)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(400).json({message: 'Invalid User Id!'})
        }
        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const editUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId)

        if (!user) res.status(401).json('Invalid user Id')

        const editedUser = await User.findByIdAndUpdate(req.user.userId, {
            ...req.body
        }, { new: true })

        res.status(200).json({ message: "Successfully edited user", editedUser })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId)

        if (!user) res.status(401).json('Invalid user Id')

        const deletedUser = await User.findOneAndDelete(req.user.userId)

        res.status(200).json({ message: "Successfully deleted user", deletedUser })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}


module.exports = {
    getUser,
    getUserById,
    getAllUsers,
    getUserByQuery,
    editUser,
    deleteUser,
    getUserFriends,
    getUserEvents,
    getUserGroups
}