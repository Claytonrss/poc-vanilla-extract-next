
import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const btnStyle = style({
    padding: themeVars.spacing.medium,
    borderRadius: themeVars.borderRadius,
    cursor: "pointer",
    border: "none",
    selectors: {
      "&[data-color=primary]": { backgroundColor: themeVars.color.primary },
      "&[data-color=secondary]": { backgroundColor: themeVars.color.secondary },
      "&[data-size=small]": { fontSize: themeVars.spacing.small },
      "&[data-size=medium]": { fontSize: themeVars.spacing.medium },
      "&[data-size=large]": { fontSize: themeVars.spacing.large },
    },
  });