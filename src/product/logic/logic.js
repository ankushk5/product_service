const {
  productsData,
  productData,
  updateProductData,
  deleteProductData,
} = require("../data/data");
const { addProductData, addReviewData } = require("../data/data");

const ProductsLogic = () => {
  return productsData();
};

const ProductLogic = (parent, args, context, info) => {
  return productData(args.id);
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

const addReviewLogic = (parent, args, context, info) => {
  let productid = args.productid;
  let newReview = {
    review: args.review,
    rating: args.rating,
  };
  return addReviewData(productid, newReview);
};

module.exports = {
  ProductsLogic,
  ProductLogic,
  addReviewLogic,
  addProductLogic,
  updateProductLogic,
  deleteProductLogic,
};
