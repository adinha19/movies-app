require('dotenv').config();

module.exports = {
    port: process.env.PORT || "5000",
    mongo: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.PROJECT_NUMBER}?retryWrites=true&w=majority` || 'mongodb://localhost:27017/',
    secret: process.env.JWT_SECRET || 'mistral'
};