const Product = require("../../../models/Products");

const getAllProductsData = () => {
  return Product.find({});
};

const getProductByIdData = (id) => {
  //Need to populate the Product reviews
  return Product.findById(id).populate("reviews");
};

const addProductData = async (newProduct) => {
  const productdata = new Product(newProduct);
  return await productdata.save();
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
  getAllProductsData,
  getProductByIdData,
  addProductData,
  updateProductData,
  deleteProductData,
};
