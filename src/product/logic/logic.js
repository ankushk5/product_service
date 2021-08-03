const { createWriteStream } = require("fs");
const path = require("path");

const {
  getAllProductsData,
  getProductByIdData,
  updateProductData,
  deleteProductData,
  addProductData,
  getMultipleProductsData,
} = require("../data/data");

const getAllProductsLogic = () => {
  return getAllProductsData();
};

const getProductByIdLogic = (parent, args, context, info) => {
  return getProductByIdData(args.id);
};

const getMultipleProductsLogic = (parent, args, context, info) => {
  return getMultipleProductsData(args.productIDArray);
};

const addProductLogic = (parent, args, context, info) => {
  const { productName, productPrice, productDescription } = args;

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

const uploadFileLogic = async (file) => {
  // const { filename, mimetype, encoding, createReadStream } = await file;
  // console.log(filename);
  // try {
  //   const stream = createReadStream(__dirname);
  //   console.log(stream);
  // } catch (error) {
  //   throw error;
  // }
  // return { filename, mimetype, encoding };
};

module.exports = {
  getAllProductsLogic,
  getProductByIdLogic,
  getMultipleProductsLogic,
  addProductLogic,
  updateProductLogic,
  deleteProductLogic,
  uploadFileLogic,
};
