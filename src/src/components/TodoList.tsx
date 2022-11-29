import { Todo } from "@generated/resolvers-types";
import { For } from "solid-js";
import styles from "./TodoList.module.css";

interface TodoItemProps {
  todo: Todo;
}

interface TodoListProps {
  todos: Todo[];
}

function TodoItem(props: TodoItemProps) {
  return <div class={styles.todoItem}>{props.todo.title}</div>;
}

function TodoList(props: TodoListProps) {
  return (
    <For each={props.todos} fallback={<div>Map loading...</div>}>
      {(item) => <TodoItem todo={item} />}
    </For>
  );
}

export default TodoList;
