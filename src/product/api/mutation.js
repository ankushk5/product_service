const { requiresRole } = require("../../utils/requireRole");
const { productLogic } = require("../logic/logic");

const ProductMutationResolvers = {
  add: (parent, args, context, info) => {
    return productLogic.add(parent, args, context, info);
  },

  update: async (parent, args, context, info) => {
    return productLogic.update(parent, args, context, info);
  },

  delete: async (parent, args, context, info) => {
    return productLogic.delete(parent, args, context, info);
  },
};

const ProductMutation = {
  // addProduct: requiresRole("vendor", addProduct), // to make api authorized
  addProduct: ProductMutationResolvers.add,
  updateProduct: ProductMutationResolvers.update,
  deleteProduct: ProductMutationResolvers.delete, // because delete is a keyword in javascript
};

module.exports = { ProductMutation };
