const { addProduct, addReview } = require("./Mutations/api/MutationApi");
const { product, products } = require("./Queries/api/QueriesApi");

const resolvers = {
  Query: {
    products,
    product,
  },
  Mutation: {
    addProduct,
    addReview,
  },
  //reference resolvers
  // Product: {
  //   __resolveReference(ref) {
  //     return Products.findById(ref.id);
  //   },
  // },
};
module.exports = { resolvers };
