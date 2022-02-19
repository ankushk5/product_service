const express = require("express");
const router = express.Router();
const productRoutes = require("./product/api/product-routes");


// TODO :  protect this api using some secret key
router.use("/product", productRoutes);

module.exports = router;