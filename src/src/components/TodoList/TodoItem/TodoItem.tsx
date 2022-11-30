import { Todo } from "@generated/resolvers-types";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem(props: TodoItemProps) {
  return <div>{props.todo.title}</div>;
}

export default TodoItem;
