const express = require("express");
const app = express();
const cors = require("cors");
// const { ApolloServer } = require("apollo-server");
// const { buildFederatedSchema } = require("@apollo/federation");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

app.use(cors());

const connectDB = require("./config/db");
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// const apolloServer = new ApolloServer({
//   schema: buildFederatedSchema[{}],
// });

app.get("/product", (req, res) => {
  res.send("product service in your service");
});

app.listen(4001, () => {
  console.log("server listening to port 4001");
});
