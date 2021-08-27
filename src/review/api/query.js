const { requiresRole } = require("../../utils/requireRole");
const { ReviewLogic } = require("../logic/logic");

const ReviewQueryResolvers = {
  getByCustomerId: (parent, args, context, info) => {
    return ReviewLogic.getByCustomerId(parent, args, context, info);
  },
};

const { getByCustomerId } = ReviewQueryResolvers;

const ReviewQuery = {
  getReviewsByCustomerId: requiresRole("customer", getByCustomerId),
};

module.exports = { ReviewQuery };
