const { addProduct, addReview } = require("./Mutations/Mutations");
const { product, products } = require("./Queries/Queries");

const resolvers = {
  Query: {
    products,
    product,
  },
  Mutation: {
    addProduct,
    addReview,
  },
};
module.exports = { resolvers };
