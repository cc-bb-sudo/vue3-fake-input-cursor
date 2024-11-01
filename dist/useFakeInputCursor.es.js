import { ref as a, h as n } from "vue";
const s = {
  position: "absolute",
  bottom: "0",
  width: "2px",
  backgroundColor: "black",
  opacity: "0",
  transform: "translateY(50%)",
  height: "1.5em"
}, l = {
  name: "blink",
  duration: "1s",
  timingFunction: "step-end",
  iterationCount: "infinite"
};
function m({
  cursorStyle: i,
  cursorAnimation: t
} = {}) {
  i = {
    ...s,
    ...i
  }, t = {
    ...l,
    ...t
  };
  const o = a(!1), e = a("");
  return {
    el: () => n(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%"
        }
      },
      [
        n(
          "span",
          {
            style: {
              opacity: 0
            }
          },
          e.value
        ),
        n("span", {
          style: {
            visibility: o.value ? "visible" : "hidden",
            animationName: t.name,
            animationDuration: t.duration,
            animationTimingFunction: t.timingFunction,
            animationIterationCount: t.iterationCount,
            ...i
          }
        }),
        n(
          "style",
          null,
          `
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `
        )
      ]
    ),
    showInputCursor: () => {
      o.value = !0;
    },
    hideInputCursor: () => {
      o.value = !1;
    },
    updateInputCursor: (u) => {
      e.value = u;
    }
  };
}
export {
  m as useFakeInputCursor
};
