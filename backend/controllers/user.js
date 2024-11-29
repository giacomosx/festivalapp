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

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
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
    getAllUsers,
    editUser,
    deleteUser
}