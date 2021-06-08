const Cart = require("../../../models/Cart");

const getCartData = () => {
  return Cart.find({});
};

const addToCartData = async (cartItem) => {
  const cartItemData = await new Cart(cartItem);
  return await cartItemData.save();
};

module.exports = { getCartData, addToCartData };
