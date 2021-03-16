const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const connectDB = require("./config/db");
connectDB();

app.get("/product", (req, res) => {
  res.send("product service in your service");
});

app.listen(4001, () => {
  console.log("server listening to port 4001");
});
