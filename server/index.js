import { ApolloServer } from "apollo-server-express";
import express from "express";
import { all_typedefs } from "./typedefs/typedefs.js";
import { user_services } from "./services/user-services/user-services.js";
import { post_services } from "./services/post-services/post-services.js";
import cors from "cors";
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
const server = new ApolloServer({
  typeDefs: all_typedefs,
  resolvers: {
    Query: {
      ...user_services.query,
      ...post_services.query,
    },
    Mutation: {
      ...user_services.mutation,
      ...post_services.mutation,
    },
  },
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
