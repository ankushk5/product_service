const graphql = require("graphql");
const { GraphQLUpload } = require("graphql-upload");
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

// const FileType = new GraphQLObjectType({
//   name: "File",
//   fields: () => ({
//     id: {
//       type: GraphQLID,
//     },
//     path: {
//       type: GraphQLString,
//     },
//     filename: {
//       type: GraphQLString,
//     },
//     mimetype: {
//       type: GraphQLString,
//     },
//   }),
// });

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //getting all Products
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({});
      },
    },
    //Getting single Product Using the product id
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args.id);
      },
    },
    // uploads: {
    //   type: FileType,
    //   resolve(parent, args) {},
    // },
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
      },
    },
    // singleUpload: {
    //   type: FileType,
    //   args: {
    //     file: {
    //       type: GraphQLUpload,
    //     },
    //   },
    //   resolve: (parent, { file }, { storeUpload }) => storeUpload(file),
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
