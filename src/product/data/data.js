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
      upset: true,
    }
  );
  return await updatedProduct.save();
};

module.exports = { productsData, productData, addProductData, addReviewData };
