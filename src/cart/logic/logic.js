const { cartData } = require("../data/data");

const cartLogic = {
  getAll: (parent, args, context, info) => {
    return cartData.getAll();
  },

  getByCustomerId: (parent, args, context, info) => {
    const customerId = context.user.public_id;
    return cartData.getByCustomerId(customerId);
  },

  getByProductId: (parent, args, context, info) => {
    return cartData.getByProductId(args.productID);
  },

  add: (parent, args, context, info) => {
    const { productID } = args;
    const customerId = context.user.public_id;

    return cartData.add(productID, customerId);
  },

  updateQuantity: (parent, args, context, info) => {
    const { cartID, quantity } = args;

    return cartData.updateQuantity(cartID, quantity);
  },

  delete: (parent, args, context, info) => {
    const cartID = args.cartID;
    return cartData.delete(cartID);
  },

  deleteByCustomerId: (parent, args, context, info) => {
    const customerId = context.user.public_id;
    return cartData.deleteByCustomerId(customerId);
  },
};

module.exports = {
  cartLogic,
};
