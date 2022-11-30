import { Todo } from "@generated/resolvers-types";
import { For } from "solid-js";
import TodoItem from "./TodoItem/TodoItem";
import { TodoListStyle } from "./TodoList.style";

interface TodoListProps {
  todos: Todo[];
}

function TodoList(props: TodoListProps) {
  return (
    <div class={TodoListStyle()}>
      <For each={props.todos} fallback={<div>Map loading...</div>}>
        {(item) => <TodoItem todo={item} />}
      </For>
    </div>
  );
}

export default TodoList;
