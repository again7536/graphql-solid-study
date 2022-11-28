import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { ApolloContext } from "./context";
import { todoResolver, userResolver } from "./resolvers";
import { Resolvers } from "./__generated__/resolvers-types";

(async () => {
  const todoType = readFileSync("./model/todo.graphql", { encoding: "utf-8" });
  const userType = readFileSync("./model/user.graphql", { encoding: "utf-8" });
  const queryType = readFileSync("./model/query.graphql", {
    encoding: "utf-8",
  });

  const resolvers: Resolvers = {
    Query: { todos: todoResolver, users: userResolver },
  };

  const server = new ApolloServer<ApolloContext>({
    typeDefs: [todoType, userType, queryType],
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    // context: async ({ req }) => {
    //   return {};
    // },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
