const { ProductMutation } = require("./product/api/mutation");
const { ProductQuery } = require("./product/api/query");

const { CartQuery } = require("./cart/api/query");
const { CartMutation } = require("./cart/api/mutation");
const { ReviewMutation } = require("./review/api/mutation");
const { getProductByIdData } = require("./product/data/data");

const resolvers = {
  Query: {
    ...ProductQuery,
    ...CartQuery,
  },
  Mutation: {
    ...ProductMutation,
    ...CartMutation,
    ...ReviewMutation,
  },
  /**
   * reference resolver for the Product Schema
   * @param ID
   * @returns corresponding product Data
   */
  Product: {
    __resolveReference(ref) {
      return getProductByIdData(ref.id);
    },
  },
};

module.exports = { resolvers };
