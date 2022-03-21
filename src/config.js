require('dotenv').config();

export default {
    mongoURL: process.env.MONGO_URI ,
    port: process.env.PORT
}