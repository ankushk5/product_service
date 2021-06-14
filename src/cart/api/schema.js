const { gql } = require("apollo-server");

const typeDefs = gql`
  type Review {
    review: String
    rating: Int
  }
  input InputReview {
    review: String
    rating: Int
  }
  type Product @key(fields: "id") {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
    reviews: [Review]
  }

  extend type Query {
    products: [Product]
    product(id: ID!): Product
  }
  type Mutation {
    addProduct(
      productName: String
      productDescription: String
      productPrice: Int
    ): Product

    addReview(productid: ID, review: String, rating: Int): Product
  }
`;
module.exports = { typeDefs };
