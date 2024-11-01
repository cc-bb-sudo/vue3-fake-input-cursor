import { ref, h } from "vue";

import { CSSProperties, VNode } from "vue";

export interface UseFakeInputCursor {
  el: () => VNode;
  showInputCursor: () => void;
  hideInputCursor: () => void;
  updateInputCursor: (text: string) => void;
}

export interface UseFakeInputCursorParams {
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
    bottom: "0",
    width: "2px",
    backgroundColor: "black",
    opacity: "0",
    transform: "translateY(50%)",
    height: "1.5em",
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
  const textContent = ref("");

  const el = () =>
    h(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        },
      },

      [
        h(
          "span",
          {
            style: {
              opacity: 0,
            },
          },
          textContent.value,
        ),
        h("span", {
          style: {
            visibility: cursorVisible.value ? "visible" : "hidden",
            animationName: cursorAnimation.name,
            animationDuration: cursorAnimation.duration,
            animationTimingFunction: cursorAnimation.timingFunction,
            animationIterationCount: cursorAnimation.iterationCount,
            ...cursorStyle,
          },
        }),

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

  const updateInputCursor = (text: string) => {
    textContent.value = text;
  };

  return {
    el,
    showInputCursor,
    hideInputCursor,
    updateInputCursor,
  };
}
