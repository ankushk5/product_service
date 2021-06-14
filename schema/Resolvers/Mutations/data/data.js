const Product = require("../../../../models/Products");

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

module.exports = { addProductData, addReviewData };
