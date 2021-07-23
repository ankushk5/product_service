const {
  addToCartData,
  getCartData,
  updateCartQuantityData,
  deleteCartData,
  getCartItemByProductIdLogicData,
} = require("../data/data");

const getCartLogic = () => {
  return getCartData();
};

const getCartItemByProductIdLogic = (parent, args, context, info) => {
  return getCartItemByProductIdLogicData(args.productID);
};

const addToCartLogic = (parent, args, context, info) => {
  const cartItem = {
    productID: args.productID,
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
  };
  return addToCartData(cartItem, args.productID);
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
  getCartItemByProductIdLogic,
  getCartLogic,
  updateCartQuantityLogic,
  deleteCartLogic,
};
