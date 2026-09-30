const mongoose = require('mongoose');

const connectTomongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB Successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectTomongo;
