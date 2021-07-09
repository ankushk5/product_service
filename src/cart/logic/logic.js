const {
  addToCartData,
  getCartData,
  updateCartQuantityData,
  deleteCartData,
} = require("../data/data");

const getCartLogic = () => {
  return getCartData();
};

const addToCartLogic = (parent, args, context, info) => {
  const cartItem = {
    productID: args.productID,
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
  };
  return addToCartData(cartItem);
};

const updateCartQuantityLogic = (parent, args, context, info) => {
  const cartID = args.cartID;
  const updatedCart = {
    quantity: args.quantity,
  };
  return updateCartQuantityData(cartID, updatedCart);
};

const deleteCartLogic = (parent, args, context, info) => {
  const cartID = args.cartID;
  return deleteCartData(cartID);
};
module.exports = {
  addToCartLogic,
  getCartLogic,
  updateCartQuantityLogic,
  deleteCartLogic,
};
