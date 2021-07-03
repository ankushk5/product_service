const express = require("express");
const app = express();
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const { ProductSchema } = require("./src/product/api/schema");
const { CartSchema } = require("./src/cart/api/schema");
const { ReviewSchema } = require("./src/review/api/schema");
const { resolvers } = require("./src/GraphQL");
const { mergeTypes } = require("merge-graphql-schemas");

app.use(cors());

const connectDB = require("./config/db");
connectDB();

// merging GraphQL Schemas
const typeDefs = gql`
  ${mergeTypes([ProductSchema, CartSchema, ReviewSchema])}
`;

const apolloServer = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs: typeDefs, resolvers: resolvers }]),
});

const port = 5000;

apolloServer.listen({ port }).then(({ url }) => {
  console.log(`Apollo Server ready at url ${url}`);
});

app.get("/product", (req, res) => {
  res.send("product service in your service ");
});

app.listen(4001, () => {
  console.log("server listening to port 4001");
});
