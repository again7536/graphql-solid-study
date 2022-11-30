import { flexBox } from "@/styles/mixin";
import { css } from "@/styles/themedStitches";

const TodoListStyle = css({
  position: "relative",
  width: "100%",
});
const TimeLineStyle = css({
  display: "block",
  position: "absolute",
  left: "80px",
  height: "100%",
  width: "0px",
  borderRight: "1px solid $darkblue500",
});

const TimeBlockStyle = css({
  ...flexBox({ direction: "row", justify: "flex-start", align: "flex-start" }),
});
const TimeHeaderStyle = css({
  flex: "0 0 70px",
  margin: "$3 0",
});
const TimeBodyStyle = css({
  width: "100%",
});

export {
  TodoListStyle,
  TimeLineStyle,
  TimeHeaderStyle,
  TimeBlockStyle,
  TimeBodyStyle,
};
