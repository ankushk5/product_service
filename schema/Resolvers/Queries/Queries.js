const Product = require("../../../models/Products");

const products = () => {
  return Product.find({});
};

const product = (parent, args, context, info) => {
  return Product.findById(args.id);
};

module.exports = { products, product };
