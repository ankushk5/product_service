// const Product = require("../../../../models/Products");
const { ProductsLogic, ProductLogic } = require("../logic/logic");

const products = () => {
  return ProductsLogic();
};

const product = (parent, args, context, info) => {
  return ProductLogic(parent, args, context, info);
};

module.exports = { products, product };
