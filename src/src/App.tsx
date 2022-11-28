import { createQuery } from "@merged/solid-apollo";
import { fetchTodos } from "./gql";
import type { Component } from "solid-js";

const App: Component = () => {
  const data = createQuery(fetchTodos);
  return <div>{JSON.stringify(data())}</div>;
};

export default App;
