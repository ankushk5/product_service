const Product = require("../../../../models/Products");

const productsData = () => {
  return Product.find({});
};

const productData = (id) => {
  return Product.findById(id);
};

module.exports = { productsData, productData };
