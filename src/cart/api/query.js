const { getCartLogic, getCartItemByProductIdLogic } = require("../logic/logic");

const getCart = () => {
  return getCartLogic();
};

const getCartItemByProductId = (parent, args, context, info) => {
  return getCartItemByProductIdLogic(parent, args, context, info);
};

const CartQuery = {
  getCart: getCart,
  getCartItemByProductId: getCartItemByProductId,
};

module.exports = { CartQuery };
