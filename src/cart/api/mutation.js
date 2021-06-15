const {
  addToCartLogic,
  updateCartQuantityLogic,
  deleteCartLogic,
} = require("../logic/logic");

const addToCart = async (parent, args, context, info) => {
  return addToCartLogic(parent, args, context, info);
};

const updateCartQuantity = async (parent, args, context, info) => {
  return updateCartQuantityLogic(parent, args, context, info);
};

const deleteCart = async (parent, args, context, info) => {
  return deleteCartLogic(parent, args, context, info);
};

const CartMutation = {
  addToCart: addToCart,
  updateCartQuantity: updateCartQuantity,
  deleteCart: deleteCart,
};

module.exports = { CartMutation };
