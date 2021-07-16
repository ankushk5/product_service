const Cart = require("../../../models/Cart");

const getCartData = async () => {
  return await Cart.find({});
};

const getCartItemByProductIdLogicData = async (productID) => {
  return await Cart.findOne({ productID: productID });
};

const addToCartData = async (cartItem) => {
  const cartItemData = await new Cart(cartItem);

  return await cartItemData.save();
};

const updateCartQuantityData = async (cartID, updatedCart) => {
  let updatedCartData = await Cart.findOneAndUpdate(
    { _id: cartID },
    { $set: { ...updatedCart } },
    {
      new: true,
    }
  );
  return updatedCartData;
};

const deleteCartData = async (cartID) => {
  try {
    const result = await Cart.findByIdAndDelete(cartID);
    return result;
  } catch (error) {
    return ` Error ${error} `;
  }
};

module.exports = {
  getCartData,
  getCartItemByProductIdLogicData,
  addToCartData,
  updateCartQuantityData,
  deleteCartData,
};
