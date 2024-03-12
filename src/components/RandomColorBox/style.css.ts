import { themeVars } from "@/styles/theme.css";
import { createVar, style } from "@vanilla-extract/css";

export const backgroundColorVar = createVar();

export const boxStyle = style({
  vars: {
    [backgroundColorVar]: "#222222",
  },
  width: "200px",
  padding: themeVars.spacing.medium,
  borderRadius: themeVars.borderRadius,
  border: "1px solid #222222",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: backgroundColorVar,
  boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.2)",
});
