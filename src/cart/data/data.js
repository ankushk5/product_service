const Cart = require("../../../models/Cart");

const cartData = {
  getAll: async () => {
    return await Cart.find({}).populate("productData");
  },

  getByCustomerId: async (customerId) => {
    return await Cart.find({ customerId: customerId }).populate("productData");
  },

  getByProductId: async (productID) => {
    return await Cart.find({ productData: productID }).populate("productData");
  },

  add: async (productID, customerId) => {
    /** Checking is there any cart item with the same product id or not */
    const isAlreadyExist = await Cart.findOne({
      productData: productID,
      customerId,
    });
    if (isAlreadyExist) {
      throw Error("Already Added To Cart");
    }

    const cartItemData = new Cart({
      productData: productID,
      customerId,
    });

    const addedCart = await cartItemData.save(); // can't use populate here, will give error
    return addedCart.populate("productData").execPopulate(); // need to execute the populate function
  },

  updateQuantity: async (cartID, quantity) => {
    let updatedCartData = await Cart.findOneAndUpdate(
      { _id: cartID },
      { $set: { quantity } },
      {
        new: true,
      }
    ).populate("productData");
    return updatedCartData;
  },

  delete: async (cartID) => {
    try {
      const result = await Cart.findByIdAndDelete(cartID).populate(
        "productData"
      );

      return result;
    } catch (error) {
      return ` Error ${error} `;
    }
  },
};

module.exports = {
  cartData,
};
