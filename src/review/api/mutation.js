const { addReviewLogic } = require("../logic/logic");

const addReview = (parent, args, context, info) => {
  return addReviewLogic(parent, args, context, info);
};

const ReviewMutation = {
  addReview: addReview,
};

module.exports = { ReviewMutation };
