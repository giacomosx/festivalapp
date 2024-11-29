const Organization = require('../models/Organization');
const User = require('../models/User');

const getAllOrganizations = async (req, res) => {
    try {
        const organizations = await Organization.find()

        return res.status(200).json(organizations);
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

const createOrganization = async (req, res) => {
    const {userId, role} = req.user

    if (!userId || role !== 'admin') {
        return res.status(401).json({message: 'Unauthorized to create organization!'})
    }

    try {
        const newOrganization = new Organization({
            ...req.body,
            owner: userId
        })

        const owner = await User.findByIdAndUpdate(userId, {
            organization: newOrganization._id
        }, {
            new: true
        })

        await newOrganization.save()

        return res.status(200).json({newOrganization, owner})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message})
    }
}

module.exports = {
    getAllOrganizations,
    createOrganization,
}