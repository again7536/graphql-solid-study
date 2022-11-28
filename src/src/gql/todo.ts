import { gql } from "@merged/solid-apollo";

const fetchTodos = gql`
  query FetchTodos {
    todos {
      title
      content
    }
  }
`;

export { fetchTodos };
