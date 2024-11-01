# vue3-fake-input-cursor

`useFakeInputCursor` is a Vue 3 composition hook that provides functionality to create a fake input cursor. This hook allows you to show and hide a blinking cursor and update its position based on the text length, all while leveraging TypeScript for type safety.

## Features

- **TypeScript Support**: Strongly typed with TypeScript for better development experience.
- **Customizable Cursor Styles**: Easily customize the cursor's appearance with CSS styles.
- **Animation Support**: Supports customizable animation properties for the cursor's blinking effect.
- **Flexible Usage**: Can be used in any Vue 3 component.
- **Single and Multi-line Text Support**: Compatible with both single-line and multi-line text, adjusting the cursor position accurately even with line-height variations.

## Installation

To use this hook, ensure you have Vue 3 and TypeScript set up in your project. You can install it via npm:

```bash
npm install vue3-fake-input-cursor
```

## Usage

### Basic Example

```vue
<template>
  <div ref="inputElement"  style="position: relative;line-height: 1.5">
    <!-- Your input field -->
    <span>{{ text }}</span>
    <CursorComponent />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useFakeInputCursor } from "./useFakeInputCursor.ts";

const text = ref("Hello, world!");
const {
    el: CursorComponent,
    showInputCursor,
    hideInputCursor,
    updateInputCursor,
} = useFakeInputCursor({
    cursorStyle: {
        bottom: `${1.5 / 2}em` /* half of line-height */,
    },
});

// Example to show cursor on mouse enter
const onMouseEnter = () => {
    showInputCursor();
    updateInputCursor(text.value);
};

const onMouseLeave = () => {
    hideInputCursor();
};
</script>

<style>
/* Add your styles here */
</style>

```

### Parameters

The useFakeInputCursor hook accepts an optional parameter to customize the cursor's styles and animations:

```ts
interface UseFakeInputCursorParams {
  cursorStyle?: Partial<CSSStyleDeclaration>;
  cursorAnimation?: {
    name?: CSSProperties["animation-name"];
    duration?: CSSProperties["animation-duration"];
    timingFunction?: CSSProperties["transition-timing-function"];
    iterationCount?: CSSProperties["animation-iteration-count"];
    delay?: CSSProperties["animation-delay"];
  };
}
```

#### Example with Custom Styles

```ts
const { el: CursorComponent } = useFakeInputCursor({
  cursorStyle: { backgroundColor: "red", height: "15px" },
  cursorAnimation: { duration: "0.8s" },
});
```

## License

This project is licensed under the MIT License.
