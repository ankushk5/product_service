const { gql } = require("apollo-server");

const productData = [
  {
    productName: "One",
    productDescription: "good",
    productPrice: 1000,
    id: 1,
  },
  {
    productName: "Two",
    productDescription: "Bad",
    productPrice: 2000,
    id: 2,
  },
];

const typeDefs = gql`
  type Product {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
  }

  extend type Query {
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    products() {
      return productData;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
