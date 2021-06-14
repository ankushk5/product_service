// const Product = require("../../../../models/Products");
const { ProductsLogic, ProductLogic, getCartLogic } = require("../logic/logic");

const products = () => {
  return ProductsLogic();
};

const product = (parent, args, context, info) => {
  return ProductLogic(parent, args, context, info);
};

const getCart = () => {
  return getCartLogic();
};

module.exports = { products, product, getCart };
