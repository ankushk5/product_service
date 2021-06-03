const { addProductData } = require("../data/data");
const { addReviewData } = require("../data/data");

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

module.exports = { addProductLogic, addReviewLogic };
