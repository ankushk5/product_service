const { gql } = require("apollo-server-express");

const ProductSchema = gql`
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
    vendorId: String
    productName: String
    productDescription: String
    productPrice: Int
    productCategory: ProductCategory
    productSubCategory: String
    productBrand: String
    productImageUrl: String
    reviews: [Review]
  }

  extend type Query {
    getAllProducts: [Product]
    getProductByProductId(id: ID!): Product
    getProductByVendorId(vendorId: String!): [Product]
    getProductsBySearchText(searchText: String!): [Product]
  }

  extend type Mutation {
    addProduct(
      vendorId: String!
      productName: String
      productDescription: String
      productPrice: Int
      productCategory: ProductCategoryInput
      productSubCategory: String
      productBrand: String
      productImageUrl: String
    ): Product

    updateProduct(
      vendorId: String!
      productID: ID
      productName: String
      productDescription: String
      productPrice: Int
      productCategory: ProductCategoryInput
      productSubCategory: String
      productBrand: String
      productImageUrl: String
    ): Product

    deleteProduct(productID: ID): Product
  }
`;
module.exports = { ProductSchema };
