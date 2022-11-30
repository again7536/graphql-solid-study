import { QueryResolvers, Todo } from "../__generated__/resolvers-types";

const todoData: Todo[] = [
  { title: "hi", due: "9:00", content: "hi" },
  { title: "hi2", due: "10:00", content: "hi2" },
];

const todoResolver: QueryResolvers["todos"] = (parent, args, context) => {
  if (args.title === undefined) return todoData;
  return todoData.filter((todo) => todo.title === args.title);
};

export { todoResolver };
