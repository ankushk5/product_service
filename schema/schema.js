const { gql } = require("apollo-server");
const Product = require("../models/Products");

const typeDefs = gql`
  type Product {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
  type Mutation {
    addProduct(
      productName: String
      productDescription: String
      productPrice: Int
    ): Product
  }
`;

const resolvers = {
  Query: {
    products() {
      return Product.find({});
    },
    product(parent, args, context, info) {
      return Product.findById(args.id);
    },
  },
  Mutation: {
    addProduct(parent, args, context, info) {
      let newProduct = new Product({
        productName: args.productName,
        productDescription: args.productDescription,
        productPrice: args.productPrice,
      });
      return newProduct.save();
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
