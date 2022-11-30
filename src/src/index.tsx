/* @refresh reload */
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@merged/solid-apollo";
import { render } from "solid-js/web";
import { Suspense } from "solid-js";

import App from "./App";

const inMemoryCache = new InMemoryCache();

const client = new ApolloClient({
  cache: inMemoryCache,
  uri: "http://localhost:4000/",
});

render(
  () => (
    <ApolloProvider client={client}>
      <Suspense fallback={<>App is loading…</>}>
        <App />
      </Suspense>
    </ApolloProvider>
  ),
  document.getElementById("root") as HTMLElement
);
