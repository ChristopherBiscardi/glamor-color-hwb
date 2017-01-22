import hwb from "./index.es.js";
import { plugins, css, styleSheet } from "glamor";
import { renderStatic } from "glamor/server";
import { StyleSheet } from "glamor/lib/sheet";
plugins.clear();
plugins.add(hwb);

describe("hwb()", () => {
  test("converts `hwb()`", () => {
    const styles = css({
      color: "hwb(90, 0%, 0%, 0.5)",
      background: "linear-gradient(hwb(190, 50%, 0%), hwb(190, 50%, 10%, .2))",
      ":hover": { backgroundColor: "red" }
    });
    const res = renderStatic(() => styles);
    expect(
      res.css
    ).toBe(".css-1imi224,[data-css-1imi224]{color:rgba(128, 255, 0, 0.5);background:linear-gradient(rgb(128, 234, 255), rgba(128, 213, 230, 0.2));}.css-1imi224:hover,[data-css-1imi224]:hover{background-color:red;}");
  });
});
