const { addToCartLogic } = require("../logic/logic");

const addToCart = async (parent, args, context, info) => {
  return addToCartLogic(parent, args, context, info);
};

const CartMutation = {
  addToCart: addToCart,
};

module.exports = { CartMutation };
