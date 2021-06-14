const { addToCartData, getCartData } = require("../data/data");

const addToCartLogic = (parent, args, context, info) => {
  const cartItem = {
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
  };
  return addToCartData(cartItem);
};

const getCartLogic = () => {
  return getCartData();
};

module.exports = { addToCartLogic, getCartLogic };
