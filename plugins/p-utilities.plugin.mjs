import plugin from "tailwindcss/plugin";

export default plugin(({ matchUtilities }) => {
  const rules = {
    pm: "margin",
    pmt: "marginTop",
    pmb: "marginBottom",
    pml: "marginLeft",
    pmr: "marginRight",
    pmx: ["marginLeft", "marginRight"],
    pmy: ["marginTop", "marginBottom"],
    pp: "padding",
    ppt: "paddingTop",
    ppb: "paddingBottom",
    ppl: "paddingLeft",
    ppr: "paddingRight",
    ppx: ["paddingLeft", "paddingRight"],
    ppy: ["paddingTop", "paddingBottom"],
    pg: "gap",
    pr: "border-radius",
    pt: "font-size",
    pls: "letter-spacing",
    plh: "line-height",
  };

  Object.entries(rules).forEach(([key, prop]) => {
    matchUtilities(
      {
        [key]: (v) => {
          if (Array.isArray(prop)) {
            return {
              [prop[0]]: `calc(${v} * 100cqw)`,
              [prop[1]]: `calc(${v} * 100cqw)`,
            };
          }
          return { [prop]: `calc(${v} * 100cqw)` };
        },
      },
      { type: "any" },
    );
  });
});
