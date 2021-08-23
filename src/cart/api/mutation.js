const { cartLogic } = require("../logic/logic");

const CartMutationResolvers = {
  add: async (parent, args, context, info) => {
    return cartLogic.add(parent, args, context, info);
  },

  updateQuantity: async (parent, args, context, info) => {
    return cartLogic.updateQuantity(parent, args, context, info);
  },

  delete: async (parent, args, context, info) => {
    return cartLogic.delete(parent, args, context, info);
  },
};

const { add, updateQuantity } = CartMutationResolvers;

const CartMutation = {
  addToCart: add,
  updateCartQuantity: updateQuantity,
  deleteCart: CartMutationResolvers.delete, // because delete is a keyword
};

module.exports = { CartMutation };
