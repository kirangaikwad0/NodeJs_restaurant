const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const ConnectMongoose = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@restaurant.ulrgr.mongodb.net/`
    );
    console.log("MongoDB using mongoose is connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = ConnectMongoose;
