const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const register = async (req, res) => {
    const {email, password} = req.body;
    try {
        const userExist = await User.findOne({email})
        
        if (!userExist) {
            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) return res.status(500).json({message: err.message});
                try {
                    const newUser = await new User({
                        ...req.body,
                        password: hash,
                    });
                    await newUser.save();

                    res.status(200).json({
                        message: 'User Created'
                    })                    
                } catch (e) {
                    res.status(400).json({message: e.message});
                }
            });
        } else {
            res.status(400).json({
                statusCode: 400,
                error: 'User already exists'
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err.message});
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({email})

        if (!user) return res.status(401).json({message:"Invalid email or password"});

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) return res.status(401).json({message:"Invalid email or password"});

        const token = jwt.sign({userId: user._id, email},
            process.env.JWT_SECRET_KEY,
            {expiresIn: '1h'});

        const userData = {
            userId: user._id,
            username: user.username,
            avatar: user.avatar
        }

        res.status(200).json({token, userData});

    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports = {login, register};