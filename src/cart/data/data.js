const Cart = require("../../../models/Cart");

const cartData = {
  getAll: async () => {
    return await Cart.find({});
  },

  getByProductId: async (productID) => {
    return await Cart.findOne({ productID: productID });
  },

  add: async (cartItem, productID) => {
    /** Checking is there any cart item with the same product id or not */
    const isAlreadyExist = await Cart.findOne({ productID: productID });
    if (isAlreadyExist) {
      throw Error("Already Added To Cart");
    }

    const cartItemData = await new Cart(cartItem);

    return await cartItemData.save();
  },

  updateQuantity: async (cartID, updatedCart) => {
    let updatedCartData = await Cart.findOneAndUpdate(
      { _id: cartID },
      { $set: { ...updatedCart } },
      {
        new: true,
      }
    );
    return updatedCartData;
  },

  delete: async (cartID) => {
    try {
      const result = await Cart.findByIdAndDelete(cartID);
      return result;
    } catch (error) {
      return ` Error ${error} `;
    }
  },
};

module.exports = {
  cartData,
};
