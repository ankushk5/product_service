const Product = require("../../../models/Products");

const getAllProductsData = async () => {
  return await Product.find({});
};

const getProductByIdData = async (id) => {
  //Need to populate the Product reviews
  return await Product.findById(id).populate("reviews");
};

const getMultipleProductsData = async (productIDArray) => {
  const data = await Product.find({ _id: { $in: productIDArray } });
  console.log(data);
  return data;
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
  getMultipleProductsData,
  addProductData,
  updateProductData,
  deleteProductData,
};
