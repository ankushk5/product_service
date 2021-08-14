const { gql } = require("apollo-server-express");

const ProductSchema = gql`
  scalar Upload

  type Product @key(fields: "id") {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
    reviews: [Review]
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  extend type Query {
    getAllProducts: [Product]
    getProductById(id: ID!): Product
    getProductsBySearchText(searchText: String!): [Product]
    getMultipleProducts(productIDArray: [ID]): [Product]
  }

  extend type Mutation {
    addProduct(
      productName: String
      productDescription: String
      productPrice: Int
    ): Product

    updateProduct(
      productID: ID
      productName: String
      productDescription: String
      productPrice: Int
    ): Product

    deleteProduct(productID: ID): Product

    uploadFile(file: Upload!): File!
  }
`;
module.exports = { ProductSchema };
