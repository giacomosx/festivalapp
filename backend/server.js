require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user')

const authMidd = require('./middlewares/tokenController')

const server = express();
const PORT = process.env.PORT || 5001;

server.use(cors());
server.use(express.json());

server.use('/api/v1/auth', authRoutes);

server.use(authMidd.verifyToken)

server.use('/api/v1/user', userRoutes)

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI + process.env.DB_NAME);
        await console.log('MongoDB Connected!');

        server.listen(PORT, () => {
                console.log(`Server listening on port ${PORT}`);
            }
        )
    } catch (e) {
        console.error(e);
    }
}

startServer();