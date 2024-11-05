require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const server = express();
const PORT = process.env.PORT || 5001;

server.use(cors());
server.use(express.json());

server.use('/api/v1/auth', authRoutes);

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