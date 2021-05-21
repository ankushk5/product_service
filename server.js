const express = require("express");
const app = express();
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const { typeDefs, resolvers } = require("./schema/TestSchema");

app.use(cors());

const connectDB = require("./config/db");
connectDB();

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

const apolloServer = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

// const apolloServer = new ApolloServer({ typeDefs, resolvers });

const port = 5000;

apolloServer.listen({ port }).then(({ url }) => {
  console.log(`Apollo Server ready at url ${url}`);
});

app.get("/product", (req, res) => {
  res.send("product service in your service");
});

app.listen(4001, () => {
  console.log("server listening to port 4001");
});
