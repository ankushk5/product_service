const { createWriteStream } = require("fs");
const path = require("path");

const {
  getAllProductsData,
  getProductByIdData,
  updateProductData,
  deleteProductData,
  addProductData,
  getMultipleProductsData,
  getProductsBySearchTextData,
} = require("../data/data");

const getAllProductsLogic = () => {
  return getAllProductsData();
};

const getProductByIdLogic = (parent, args, context, info) => {
  return getProductByIdData(args.id);
};

const getProductsBySearchTextLogic = (parent, args, context, info) => {
  return getProductsBySearchTextData(args.searchText);
};

const getMultipleProductsLogic = (parent, args, context, info) => {
  return getMultipleProductsData(args.productIDArray);
};

const addProductLogic = (parent, args, context, info) => {
  const {
    productName,
    productPrice,
    productDescription,
    productCategory,
    productSubCategory,
    productBrand,
  } = args;

  const newProduct = {
    productName,
    productPrice,
    productDescription,
    productCategory,
    productSubCategory,
    productBrand,
  };
  return addProductData(newProduct);
};

const updateProductLogic = (parent, args, context, info) => {
  const productID = args.productID;

  const productDetailsToUpdate = {
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
    productCategory: args.productCategory,
    productSubCategory: args.productSubCategory,
    productBrand: args.productBrand,
  };

  return updateProductData(productID, productDetailsToUpdate);
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
  getProductsBySearchTextLogic,
  getMultipleProductsLogic,
  addProductLogic,
  updateProductLogic,
  deleteProductLogic,
  uploadFileLogic,
};
