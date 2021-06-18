const {
  addReviewLogic,
  updateReviewLogic,
  deleteReviewLogic,
} = require("../logic/logic");

const addReview = (parent, args, context, info) => {
  return addReviewLogic(parent, args, context, info);
};
const updateReview = (parent, args, context, info) => {
  return updateReviewLogic(parent, args, context, info);
};
const deleteReview = (parent, args, context, info) => {
  return deleteReviewLogic(parent, args, context, info);
};

const ReviewMutation = {
  addReview: addReview,
  updateReview: updateReview,
  deleteReview: deleteReview,
};

module.exports = { ReviewMutation };
