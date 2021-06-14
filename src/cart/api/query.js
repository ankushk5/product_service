const { getCartLogic } = require("../logic/logic");

const getCart = () => {
  return getCartLogic();
};

const CartQuery = {
  getCart: getCart,
};

module.exports = { CartQuery };
