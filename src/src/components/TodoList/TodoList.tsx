import { Todo } from "@generated/resolvers-types";
import { createMemo, For } from "solid-js";
import TodoItem from "./TodoItem/TodoItem";
import {
  TodoListStyle,
  TimeLineStyle,
  TimeBlockStyle,
  TimeHeaderStyle,
  TimeBodyStyle,
} from "./TodoList.style";

interface TodoListProps {
  todos: Todo[];
}

function TodoList(props: TodoListProps) {
  const todosGroupByDue = createMemo(() =>
    props.todos.reduce(
      (acc, todo) =>
        todo.due && acc[todo.due]
          ? { ...acc, [todo.due]: [...acc[todo.due], todo] }
          : { ...acc, [todo.due as string]: [todo] },
      {} as { [timeKey: string]: Todo[] }
    )
  );

  return (
    <div class={TodoListStyle()} role="list">
      <span class={TimeLineStyle()} />
      <For
        each={Object.entries(todosGroupByDue())}
        fallback={<div>Map loading...</div>}
      >
        {([due, todos]) => (
          <div class={TimeBlockStyle()}>
            <h3 class={TimeHeaderStyle()}>{due}</h3>
            <div class={TimeBodyStyle()}>
              <hr />
              <For each={todos}>{(item) => <TodoItem todo={item} />}</For>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}

export default TodoList;
