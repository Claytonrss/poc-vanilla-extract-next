import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd", {
  margin: 0,
});

globalStyle('ul[role="list"], ol[role="list"]', {
  listStyle: "none",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("img, picture, video, canvas, svg, iframe", {
  maxWidth: "100%",
  display: "block",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("body", {
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
  background: "#DDD"
});

globalStyle("table", {
  borderCollapse: "collapse",
});

globalStyle('a, button, [role="button"]', {
  WebkitTapHighlightColor: "transparent",
});
