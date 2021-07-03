const Cart = require("../../../models/Cart");

const getCartData = () => {
  return Cart.find({});
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
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return ` Error ${error} `;
  }
};

module.exports = {
  getCartData,
  addToCartData,
  updateCartQuantityData,
  deleteCartData,
};
