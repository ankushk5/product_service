const { ReviewData } = require("../data/data");

const ReviewLogic = {
  /** For queries */
  getByCustomerId: (parent, args, context, info) => {
    const customerId = context.user.public_id;
    return ReviewData.getByCustomerId(customerId);
  },

  /** For mutations */
  add: (parent, args, context, info) => {
    const { productID, review, rating } = args;
    const customerId = context.user.public_id;
    return ReviewData.add(productID, customerId, review, rating);
  },

  update: (parent, args, context, info) => {
    const reviewID = args.id;

    const updatedReview = {
      review: args.review,
      rating: args.rating,
    };
    return ReviewData.update(reviewID, updatedReview);
  },

  delete: (parent, args, context, info) => {
    const reviewID = args.id;
    const productID = args.productID;
    return ReviewData.delete(reviewID, productID);
  },
};

module.exports = { ReviewLogic };
