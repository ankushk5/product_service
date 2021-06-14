// const { addProduct, addReview } = require("../schema/Resolvers/Mutations/api/MutationApi");
// const { product, products } = require("../schema/Resolvers/Queries/api/QueriesApi");

const { ProductMutation } = require("./product/api/mutation");
const { ProductQuery } = require("./product/api/query");

const resolvers = {
  Query: {
    ...ProductQuery,
  },
  Mutation: {
    ...ProductMutation,
  },
};

module.exports = { resolvers };
