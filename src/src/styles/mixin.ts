import { CSS } from "@stitches/core";

interface FlexBoxParams {
  direction: string;
  justify: string;
  align: string;
}

const flexBox = ({ direction, justify, align }: FlexBoxParams): CSS => ({
  display: "flex",
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
});

export { flexBox };
