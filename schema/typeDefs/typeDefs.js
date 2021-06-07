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

  type Cart {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
  }

  extend type Query {
    products: [Product]
    product(id: ID!): Product
    getCart: [Cart]
  }
  type Mutation {
    addProduct(
      productName: String
      productDescription: String
      productPrice: Int
    ): Product

    addReview(productid: ID, review: String, rating: Int): Product

    addToCart(
      productName: String
      productDescription: String
      productPrice: Int
    ): Cart
  }
`;
module.exports = { typeDefs };
