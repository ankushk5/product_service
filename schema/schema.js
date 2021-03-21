const graphql = require("graphql");
const Product = require("../models/Products");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} = graphql;

// const products = [
//   {
//     productName: "One",
//     productDescription: "good",
//     productPrice: 1000,
//     id: 1,
//   },
//   {
//     productName: "Two",
//     productDescription: "Bad",
//     productPrice: 2000,
//     id: 2,
//   },
// ];

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    productName: { type: GraphQLString },
    productDescription: { type: GraphQLString },
    productPrice: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    Products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        productName: { type: GraphQLString },
        productDescription: { type: GraphQLString },
        productPrice: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let product = new Product({
          productName: args.productName,
          productDescription: args.productDescription,
          productPrice: args.productPrice,
        });
        return product.save();
        // let product = {
        //   productName: args.productName,
        //   productDescription: args.productDescription,
        //   productPrice: args.productPrice,
        // };
        // products.push(product);
        // return product;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
