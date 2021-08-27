const { requiresRole } = require("../../utils/requireRole");
const { ReviewLogic } = require("../logic/logic");

const ReviewMutationResolvers = {
  add: (parent, args, context, info) => {
    return ReviewLogic.add(parent, args, context, info);
  },
  update: (parent, args, context, info) => {
    return ReviewLogic.update(parent, args, context, info);
  },
  delete: (parent, args, context, info) => {
    return ReviewLogic.delete(parent, args, context, info);
  },
};

const { add, update } = ReviewMutationResolvers;

const ReviewMutation = {
  addReview: requiresRole("customer", add),
  updateReview: requiresRole("customer", update),
  deleteReview: requiresRole("customer", ReviewMutationResolvers.delete),
};

module.exports = { ReviewMutation };
