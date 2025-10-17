import { createElement as h } from "react";

export default function App() {
  return h(
    "div",
    null,
    h("h1", null, "Hello FEM"),
    h("p", null, "A Paragraph!")
  );
}
