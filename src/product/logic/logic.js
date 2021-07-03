const {
  getAllProductsData,
  getProductByIdData,
  updateProductData,
  deleteProductData,
  addProductData,
} = require("../data/data");

const getAllProductsLogic = () => {
  return getAllProductsData();
};

const getProductByIdLogic = (parent, args, context, info) => {
  return getProductByIdData(args.id);
};

const addProductLogic = (parent, args, context, info) => {
  const newProduct = {
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
  };
  return addProductData(newProduct);
};

const updateProductLogic = (parent, args, context, info) => {
  const productID = args.productID;
  const updatedProduct = {
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
  };
  return updateProductData(productID, updatedProduct);
};

const deleteProductLogic = (parent, args, context, info) => {
  const productID = args.productID;
  return deleteProductData(productID);
};

module.exports = {
  getAllProductsLogic,
  getProductByIdLogic,
  addProductLogic,
  updateProductLogic,
  deleteProductLogic,
};
