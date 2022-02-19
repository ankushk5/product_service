const express = require("express");
const productRoutes = express.Router();
const {productData} = require("../data/data");

const { getByProductId } = productData;


// we used this route in getByVendorIdOfProduct 
productRoutes.get("/:id", async (req, res)=>{
    try {
        const productId = req.params.id;
        const singleProduct = await getByProductId(productId);
        // console.log({productId})
        res.status(200).json({singleProduct});
    } catch (error) {
        res.status(500).json({error : error.message})
    }
    
})

module.exports = productRoutes;