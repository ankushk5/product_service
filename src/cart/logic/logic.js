const { cartData } = require("../data/data");

const cartLogic = {
  getAll: () => {
    return cartData.getAll();
  },

  getByProductId: (parent, args, context, info) => {
    return cartData.getByProductId(args.productID);
  },

  add: (parent, args, context, info) => {
    const cartItem = {
      productID: args.productID,
      productName: args.productName,
      productDescription: args.productDescription,
      productPrice: args.productPrice,
    };
    return cartData.add(cartItem, args.productID);
  },

  updateQuantity: (parent, args, context, info) => {
    const cartID = args.cartID;
    const updatedCart = {
      quantity: args.quantity,
    };
    return cartData.updateQuantity(cartID, updatedCart);
  },

  delete: (parent, args, context, info) => {
    const cartID = args.cartID;
    return cartData.delete(cartID);
  },
};

module.exports = {
  cartLogic,
};
