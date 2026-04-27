import plugin from "tailwindcss/plugin";

export default plugin(({ matchUtilities }) => {
  const rules = {
    fm: "margin",
    fmt: "marginTop",
    fmb: "marginBottom",
    fml: "marginLeft",
    fmr: "marginRight",
    fmx: ["marginLeft", "marginRight"],
    fmy: ["marginTop", "marginBottom"],
    fp: "padding",
    fpt: "paddingTop",
    fpb: "paddingBottom",
    fpl: "paddingLeft",
    fpr: "paddingRight",
    fpx: ["paddingLeft", "paddingRight"],
    fpy: ["paddingTop", "paddingBottom"],
    fg: "gap",
    fr: "border-radius",
    ft: "font-size",
    fls: "letter-spacing",
    flh: "line-height",
  };

  Object.entries(rules).forEach(([key, prop]) => {
    matchUtilities(
      {
        [key]: (v) => {
          if (Array.isArray(prop)) {
            return {
              [prop[0]]: `calc(${v} * 100%)`,
              [prop[1]]: `calc(${v} * 100%)`,
            };
          }
          if (key === "fr" || key === "ft" || key === "fls" || key === "flh") {
            return { [prop]: `calc(${v} * 100cqw)` };
          }
          return { [prop]: `calc(${v} * 100%)` };
        },
      },
      { type: "any" },
    );
  });
});
