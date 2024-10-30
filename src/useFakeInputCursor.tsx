import { ref, h,  } from "vue";

import {CSSProperties, VNode} from "vue";

export  interface UseFakeInputCursor {
  el: () => VNode;
  showInputCursor: () => void;
  hideInputCursor: () => void;
  updateInputCursor: (element: HTMLElement, text: string) => void;
}

export  interface UseFakeInputCursorParams {
  cursorStyle?: Partial<CSSStyleDeclaration>;
  cursorAnimation?: {
    name?: CSSProperties["animation-name"];
    duration?: CSSProperties["animation-duration"];
    timingFunction?: CSSProperties["transition-timing-function"];
    iterationCount?: CSSProperties["animation-iteration-count"];
    delay?: CSSProperties["animation-delay"];
  };
}



const DEFAULT_CURSOR_STYLE = {
    position: "absolute",
    top: "50%",
    width: "2px",
    backgroundColor: "black",
    opacity: "0",
    transform: "translateY(-50%)",
    height: "10px",
  },
  DEFAULT_CURSOR_ANIMATION = {
    name: "blink",
    duration: "1s",
    timingFunction: "step-end",
    iterationCount: "infinite",
  };

export function useFakeInputCursor({
  cursorStyle,
  cursorAnimation,
}: UseFakeInputCursorParams = {}): UseFakeInputCursor {
  cursorStyle = {
    ...DEFAULT_CURSOR_STYLE,
    ...cursorStyle,
  };
  cursorAnimation = {
    ...DEFAULT_CURSOR_ANIMATION,
    ...cursorAnimation,
  };

  const cursorVisible = ref(false);
  const cursorPosition = ref(0);

  const el = () =>
    h(
      "div",
      {
        style: {
          visibility: cursorVisible.value ? "visible" : "hidden",
          left: `${cursorPosition.value}px`,
          animationName: cursorAnimation.name,
          animationDuration: cursorAnimation.duration,
          animationTimingFunction: cursorAnimation.timingFunction,
          animationIterationCount: cursorAnimation.iterationCount,
          ...cursorStyle,
        },
      },

      [
        h(
          "style",
          null,
          `
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `,
        ),
      ],
    );

  const showInputCursor = () => {
    cursorVisible.value = true;
  };

  const hideInputCursor = () => {
    cursorVisible.value = false;
  };

  const updateInputCursor = (element: HTMLElement, text: string) => {
    if (element) {
      const index = text.length;

      if (index === 0) {
        cursorPosition.value = 0;
        return;
      }

      const tempSpan = document.createElement("span");
      tempSpan.style.font = getComputedStyle(element).font;
      tempSpan.innerText = text;
      document.body.appendChild(tempSpan);

      cursorPosition.value = tempSpan.offsetWidth;

      document.body.removeChild(tempSpan);
    }
  };

  return {
    el,
    showInputCursor,
    hideInputCursor,
    updateInputCursor,
  };
}
