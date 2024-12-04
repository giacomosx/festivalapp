require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const publicRoutes = require('./routes/public');
const userRoutes = require('./routes/user')
const eventRoutes = require('./routes/event');
const organizationRoutes = require('./routes/organization');
const friendRequestRoutes = require('./routes/friendRequest');

const authMid = require('./middlewares/tokenController')

const server = express();
const PORT = process.env.PORT || 5001;

server.use(cors());
server.use(express.json());

server.use('/api/v1/auth', authRoutes);
server.use('/api/v1/public', publicRoutes);

server.use(authMid.verifyToken)

server.use('/api/v1/user', userRoutes)
server.use('/api/v1/event', eventRoutes)
server.use('/api/v1/organization', organizationRoutes)
server.use('/api/v1/request', friendRequestRoutes )

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