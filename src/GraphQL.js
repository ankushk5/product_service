const { ProductMutation } = require("./product/api/mutation");
const { ProductQuery } = require("./product/api/query");
const { CartQuery } = require("./cart/api/query");
const { CartMutation } = require("./cart/api/mutation");
const { ReviewMutation } = require("./review/api/mutation");
const { productData } = require("./product/data/data");

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
      // console.log(ref.id);
      return productData.getByProductId(ref.id);
    },
  },
};

module.exports = { resolvers };
