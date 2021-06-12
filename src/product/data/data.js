const { findByIdAndDelete } = require("../../../models/Products");
const Product = require("../../../models/Products");

const productsData = () => {
  return Product.find({});
};

const productData = (id) => {
  return Product.findById(id);
};

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
    }
  );
  return await updatedProduct.save();
};

const updateProductData = async (productID, updatedProduct) => {
  let updatedProductData = await Product.findOneAndUpdate(
    { _id: productID },
    { $set: { ...updatedProduct } },
    {
      new: true,
    }
  );
  return await updatedProductData.save();
};

const deleteProductData = async (productID) => {
  try {
    const result = await Product.findByIdAndDelete(productID);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return ` Error ${error} `;
  }
};

module.exports = {
  productsData,
  productData,
  addProductData,
  addReviewData,
  updateProductData,
  deleteProductData,
};
