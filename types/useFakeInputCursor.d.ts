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
export declare function useFakeInputCursor({ cursorStyle, cursorAnimation, }?: UseFakeInputCursorParams): UseFakeInputCursor;
