import reduceFunctionCall from "reduce-function-call";
import color from "color";

export default function hwb({ selector, style }) {
  Object.entries(style).map(([ key, val ]) => {
    if (val.includes("hwb(")) {
      style[key] = reduceFunctionCall(
        val,
        "hwb",
        (body, fn) => color(`${fn}(${body})`).rgb().string()
      );
    }
  });
  return { selector, style };
}
