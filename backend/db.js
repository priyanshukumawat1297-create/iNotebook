const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";

const connectTomongo = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/myDatabase");
        console.log("Connected to MongoDB Successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectTomongo;