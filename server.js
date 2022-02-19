const express = require("express");
const app = express();
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server-express");
const { buildFederatedSchema } = require("@apollo/federation");
const { ProductSchema } = require("./src/product/api/schema");
const { CartSchema } = require("./src/cart/api/schema");
const { ReviewSchema } = require("./src/review/api/schema");
const { resolvers } = require("./src/GraphQL");
const { mergeTypes } = require("merge-graphql-schemas");
const { graphqlUploadExpress } = require("graphql-upload");
const routers = require("./src/REST");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./config/db");
connectDB();

// merging GraphQL Schemas
const typeDefs = gql`
  ${mergeTypes([ProductSchema, CartSchema, ReviewSchema])}
`;


app.use("/", routers);

const apolloServer = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs: typeDefs, resolvers: resolvers }]),
  subscriptions: false,
  uploads: false,
  /** passing context to every resolver */
  context: ({ req }) => {
    const user = req.headers.user ? JSON.parse(req.headers.user) : null;
    return { user };
  },
});

app.use(graphqlUploadExpress());

async function startServer() {
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  await app.listen({ port: 4001 });

  console.log(
    `🚀 Server ready at http://localhost:4001${apolloServer.graphqlPath}`
  );
}

startServer();
