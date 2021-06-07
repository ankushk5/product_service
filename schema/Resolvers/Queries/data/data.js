const Product = require("../../../../models/Products");
const Cart = require("../../../../models/Cart");

const productsData = () => {
  return Product.find({});
};

const productData = (id) => {
  return Product.findById(id);
};

const getCartData = () => {
  return Cart.find({});
};

module.exports = { productsData, productData, getCartData };
