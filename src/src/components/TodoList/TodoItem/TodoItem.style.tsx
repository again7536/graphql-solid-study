import { flexBox } from "@/styles/mixin";
import { css } from "@/styles/themedStitches";

const TodoItemStyle = css({
  ...flexBox({ direction: "row", justify: "flex-start", align: "flex-start" }),
  cursor: "pointer",
  width: "100%",
});

const BodyStyle = css({
  padding: "0 $3",
  fontSize: "$1",
});

const TitleStyle = css({
  fontSize: "$4",
  margin: "0",
});

export { TodoItemStyle, BodyStyle, TitleStyle };
