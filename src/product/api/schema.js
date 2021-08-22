const { gql } = require("apollo-server-express");

const ProductSchema = gql`
  scalar Upload

  type ProductCategory {
    categoryId: Int
    categoryName: String
  }

  input ProductCategoryInput {
    categoryId: Int
    categoryName: String
  }

  type Product @key(fields: "id") {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
    productCategory: ProductCategory
    productSubCategory: String
    productBrand: String
    reviews: [Review]
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  extend type Query {
    getAllProducts: [Product]
    getProductByProductId(id: ID!): Product
    getProductByUserId(userId: String!): Product
    getProductsBySearchText(searchText: String!): [Product]
  }

  extend type Mutation {
    addProduct(
      productName: String
      productDescription: String
      productPrice: Int
      productCategory: ProductCategoryInput
      productSubCategory: String
      productBrand: String
    ): Product

    updateProduct(
      productID: ID
      productName: String
      productDescription: String
      productPrice: Int
      productCategory: ProductCategoryInput
      productSubCategory: String
      productBrand: String
    ): Product

    deleteProduct(productID: ID): Product

    uploadFile(file: Upload!): File!
  }
`;
module.exports = { ProductSchema };
