const {
  addProduct,
  addReview,
  addToCart,
} = require("./Mutations/api/MutationApi");
const { product, products, getCart } = require("./Queries/api/QueriesApi");

const resolvers = {
  Query: {
    products,
    product,
    getCart,
  },
  Mutation: {
    addProduct,
    addReview,
    addToCart,
  },
  //reference resolvers
  // Product: {
  //   __resolveReference(ref) {
  //     return Products.findById(ref.id);
  //   },
  // },
};
module.exports = { resolvers };
