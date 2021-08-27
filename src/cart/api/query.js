const { requiresRole } = require("../../utils/requireRole");
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

/** destructuring Resolver functions */
const { getAll, getByCustomerId, getByProductId } = CartQueryResolvers;

const CartQuery = {
  getCart: requiresRole("admin", getAll), // this should not exist (may be in future)
  getCartByCustomerId: requiresRole("customer", getByCustomerId), // customer endpoint
  getCartByProductId: requiresRole("customer", getByProductId), // customer endpoint (till now no use)
};

module.exports = { CartQuery };
