const mongoose = require("mongoose");
require("dotenv").config();

const connectionOptions = {
    dbName: `dev-tinder`,
};

const connectToDB = async () => {
    console.log(`process.env.MONGO_URL: ${process.env.MONGO_URL}`);
    await mongoose.connect(process.env.MONGO_URL, connectionOptions);
};

module.exports = connectToDB;
