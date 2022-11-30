import { css } from "@/styles/themedStitches";

const TodoListStyle = css({
  width: "300px",
  backgroundColor: "$blue500",
  "@sm": {
    width: "100%",
    backgroundColor: "$green500",
  },
  "@md": {
    backgroundColor: "$gray500",
  },
});

export { TodoListStyle };
