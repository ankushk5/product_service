const { ProductMutation } = require("./product/api/mutation");
const { ProductQuery } = require("./product/api/query");

const { CartQuery } = require("./cart/api/query");
const { CartMutation } = require("./cart/api/mutation");
const { ReviewMutation } = require("./review/api/mutation");

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
};

module.exports = { resolvers };
