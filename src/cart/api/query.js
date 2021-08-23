const { cartLogic } = require("../logic/logic");

const CartQueryResolvers = {
  getAll: () => {
    return cartLogic.getAll();
  },

  getByProductId: (parent, args, context, info) => {
    return cartLogic.getByProductId(parent, args, context, info);
  },
};

const CartQuery = {
  getCart: CartQueryResolvers.getAll,
  getCartItemByProductId: CartQueryResolvers.getByProductId,
};

module.exports = { CartQuery };
