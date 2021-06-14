const { ProductMutation } = require("./product/api/mutation");
const { ProductQuery } = require("./product/api/query");

const { CartQuery } = require("./cart/api/query");
const { CartMutation } = require("./cart/api/mutation");

const resolvers = {
  Query: {
    ...ProductQuery,
    ...CartQuery,
  },
  Mutation: {
    ...ProductMutation,
    ...CartMutation,
  },
};

module.exports = { resolvers };
