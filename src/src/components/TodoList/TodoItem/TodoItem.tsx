import { Todo } from "@generated/resolvers-types";
import { createSignal, Ref } from "solid-js";
import TodoIcon from "@/components/TodoList/TodoIcon/TodoIcon";
import { BodyStyle, TitleStyle, TodoItemStyle } from "./TodoItem.style";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem(props: TodoItemProps) {
  const [checked, setChecked] = createSignal<boolean>(false);

  const handleCheck = () => setChecked((prev) => !prev);

  return (
    <div class={TodoItemStyle()} onclick={handleCheck} role="listitem">
      <TodoIcon checked={checked()} width={24} height={24} />
      <div class={BodyStyle()}>
        <h3 class={TitleStyle()}>{props.todo.title}</h3>
        {props.todo.title}
      </div>
    </div>
  );
}

export default TodoItem;
