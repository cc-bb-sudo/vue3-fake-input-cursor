import { ref as s, h as r } from "vue";
const l = {
  position: "absolute",
  top: "50%",
  width: "2px",
  backgroundColor: "black",
  opacity: "0",
  transform: "translateY(-50%)",
  height: "10px"
}, p = {
  name: "blink",
  duration: "1s",
  timingFunction: "step-end",
  iterationCount: "infinite"
};
function b({
  cursorStyle: e,
  cursorAnimation: t
} = {}) {
  e = {
    ...l,
    ...e
  }, t = {
    ...p,
    ...t
  };
  const i = s(!1), o = s(0);
  return {
    el: () => r(
      "div",
      {
        style: {
          visibility: i.value ? "visible" : "hidden",
          left: `${o.value}px`,
          animationName: t.name,
          animationDuration: t.duration,
          animationTimingFunction: t.timingFunction,
          animationIterationCount: t.iterationCount,
          ...e
        }
      },
      [
        r(
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
      i.value = !0;
    },
    hideInputCursor: () => {
      i.value = !1;
    },
    updateInputCursor: (a, u) => {
      if (a) {
        if (u.length === 0) {
          o.value = 0;
          return;
        }
        const n = document.createElement("span");
        n.style.font = getComputedStyle(a).font, n.innerText = u, document.body.appendChild(n), o.value = n.offsetWidth, document.body.removeChild(n);
      }
    }
  };
}
export {
  b as useFakeInputCursor
};
