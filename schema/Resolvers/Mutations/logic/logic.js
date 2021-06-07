const {
  addProductData,
  addReviewData,
  addToCartData,
} = require("../data/data");

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

const addToCartLogic = (parent, args, context, info) => {
  const cartItem = {
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
  };
  return addToCartData(cartItem);
};

module.exports = { addProductLogic, addReviewLogic, addToCartLogic };
