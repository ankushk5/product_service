const { requiresRole } = require("../../utils/requireRole");
const { productLogic } = require("../logic/logic");

const ProductMutationResolvers = {
  add: (parent, args, context, info) => {
    return productLogic.add(parent, args, context, info);
  },

  /** updating using Product Id */
  update: async (parent, args, context, info) => {
    return productLogic.update(parent, args, context, info);
  },

  delete: async (parent, args, context, info) => {
    return productLogic.delete(parent, args, context, info);
  },
};

const ProductMutation = {
  // addProduct: requiresRole("vendor", addProduct),
  addProduct: requiresRole("vendor", ProductMutationResolvers.add), //vendor endpoint
  updateProduct: requiresRole("vendor", ProductMutationResolvers.update), //vendor endpoint + admin endpoint
  // because delete is a keyword in javascript
  deleteProduct: requiresRole("vendor", ProductMutationResolvers.delete), //vendor endpoint + admin endpoint
};

module.exports = { ProductMutation };
