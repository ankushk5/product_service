const { ProductLogic, ProductsLogic } = require("../logic/logic");

const products = () => {
  return ProductsLogic();
};

const product = (parent, args, context, info) => {
  return ProductLogic(parent, args, context, info);
};

const ProductQuery = {
  products: products,
  product,
};
module.exports = { ProductQuery };
