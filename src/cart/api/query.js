const { cartLogic } = require("../logic/logic");

const CartQueryResolvers = {
  getAll: (parent, args, context, info) => {
    return cartLogic.getAll(parent, args, context, info);
  },

  getByCustomerId: (parent, args, context, info) => {
    return cartLogic.getByCustomerId(parent, args, context, info);
  },

  getByProductId: (parent, args, context, info) => {
    return cartLogic.getByProductId(parent, args, context, info);
  },
};

const CartQuery = {
  getCart: CartQueryResolvers.getAll,
  getCartByCustomerId: CartQueryResolvers.getByCustomerId,
  getCartByProductId: CartQueryResolvers.getByProductId,
};

module.exports = { CartQuery };
