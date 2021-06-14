const { productsData, productData, getCartData } = require("../data/data");

const ProductsLogic = () => {
  return productsData();
};

const ProductLogic = (parent, args, context, info) => {
  return productData(args.id);
};

const getCartLogic = () => {
  return getCartData();
};

module.exports = { ProductsLogic, ProductLogic, getCartLogic };
