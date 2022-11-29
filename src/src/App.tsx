import { createQuery } from "@merged/solid-apollo";
import { fetchTodos } from "./gql";
import { Component } from "solid-js";
import { Query, Todo } from "@generated/resolvers-types";
import TodoList from "./components/TodoList";

const App: Component = () => {
  const data = createQuery<Query>(fetchTodos);

  return <TodoList todos={(data()?.todos as Todo[]) ?? []} />;
};

export default App;
