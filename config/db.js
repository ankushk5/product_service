const mongoose = require("mongoose");
require('dotenv').config();

const db_URL = 
  process.env.NODE_ENV === "dev"?
  process.env.MONGO_DEV_URL : 
  process.env.MONGO_PROD_URL ;

const connectDB = async () => {
  try {
    await mongoose.connect(db_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("Product Service's MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
