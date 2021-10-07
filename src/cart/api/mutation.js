const { requiresRole } = require("../../utils/requireRole");
const { cartLogic } = require("../logic/logic");

const CartMutationResolvers = {
  add: (parent, args, context, info) => {
    return cartLogic.add(parent, args, context, info);
  },

  updateQuantity: (parent, args, context, info) => {
    return cartLogic.updateQuantity(parent, args, context, info);
  },

  delete: (parent, args, context, info) => {
    return cartLogic.delete(parent, args, context, info);
  },

  deleteByCustomerId: (parent, args, context, info) => {
    return cartLogic.deleteByCustomerId(parent, args, context, info);
  },
};

const { add, updateQuantity, deleteByCustomerId } = CartMutationResolvers;

const CartMutation = {
  addToCart: requiresRole("customer", add),
  updateCartQuantity: requiresRole("customer", updateQuantity),
  deleteCart: requiresRole("customer", CartMutationResolvers.delete), // because delete is a keyword
  clearCartByCustomerId: deleteByCustomerId,
};

module.exports = { CartMutation };
