require('dotenv').config();

module.exports = {
    port: process.env.PORT || "5000",
    mongo: process.env.MONGO || 'mongodb://localhost:27017/',
    secret: process.env.JWT_SECRET || 'mistral'
};