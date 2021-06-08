const { productsData, productData } = require("../data/data");
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
};
