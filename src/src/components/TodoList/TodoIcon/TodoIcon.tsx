import { theme } from "@/styles/themedStitches";
import { createEffect, createUniqueId } from "solid-js";

interface TodoIconProps {
  width?: number;
  height?: number;
  checked: boolean;
}

function TodoIcon(props: TodoIconProps) {
  let animRef: SVGAnimateElement | undefined;
  const linearGradId = createUniqueId();

  createEffect(() => {
    if (props.checked) animRef?.beginElement();
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={props.width ?? "30px"}
      height={props.height ?? "30px"}
      style={{ "z-index": "1" }}
    >
      <defs>
        <linearGradient id={linearGradId}>
          <stop offset="0" stop-color={theme.colors.green500.toString()}>
            <animate
              id="check-anim-offset"
              ref={animRef}
              dur="0.2s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to="1"
              begin="indefinite"
            />
          </stop>
          <stop offset="0" stop-color="#fff">
            <animate
              dur="0.2s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to="1"
              begin="check-anim-offset.begin"
            />
          </stop>
        </linearGradient>
      </defs>

      {/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
      <path
        fill={props.checked ? `url(#${linearGradId})` : "white"}
        stroke="#000"
        stroke-width="10"
        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
      />
    </svg>
  );
}

export default TodoIcon;
