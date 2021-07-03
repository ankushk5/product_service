const {
  addReviewData,
  updateReviewData,
  deleteReviewData,
} = require("../data/data");

const addReviewLogic = (parent, args, context, info) => {
  const newReview = {
    productID: args.productID,
    review: args.review,
    rating: args.rating,
  };
  return addReviewData(newReview);
};

const updateReviewLogic = (parent, args, context, info) => {
  const reviewID = args.id;
  const updatedReview = {
    review: args.review,
    rating: args.rating,
  };
  return updateReviewData(reviewID, updatedReview);
};

const deleteReviewLogic = (parent, args, context, info) => {
  const reviewID = args.id;
  const productID = args.productID;
  return deleteReviewData(reviewID, productID);
};

module.exports = { addReviewLogic, updateReviewLogic, deleteReviewLogic };
