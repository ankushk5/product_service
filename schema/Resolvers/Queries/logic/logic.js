const { productsData, productData } = require("../data/data");

const ProductsLogic = () => {
  return productsData();
};

const ProductLogic = (parent, args, context, info) => {
  return productData(args.id);
};

module.exports = { ProductsLogic, ProductLogic };
