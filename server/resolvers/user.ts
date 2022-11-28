import { QueryResolvers, User } from "../__generated__/resolvers-types";

const userData: User[] = [{ name: "hi" }, { name: "hi" }];

const userResolver: QueryResolvers["user"] = (parent, args, context) => {
  if (args.name === undefined) return userData;
  return userData.filter((user) => user.name === args.name);
};

export { userResolver };
