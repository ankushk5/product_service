const Product = require("../../../../models/Products");
const Cart = require("../../../../models/Cart");

const addProductData = async (newProduct) => {
  const productdata = await new Product(newProduct);
  return await productdata.save();
};

const addReviewData = async (productid, newReview) => {
  let updatedProduct = await Product.findOneAndUpdate(
    { _id: productid },
    {
      $push: {
        reviews: newReview,
      },
    },
    {
      new: true,
      upset: true,
    }
  );
  return await updatedProduct.save();
};

const addToCartData = async (cartItem) => {
  const cartItemData = await new Cart(cartItem);
  return await cartItemData.save();
};

module.exports = { addProductData, addReviewData, addToCartData };
