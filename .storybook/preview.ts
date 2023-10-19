import type { Preview } from "@storybook/react";
import "app/globals.scss";
import { DarkThemeDecorator } from "../lib/storybookDecorators";
import { EGlobalTheme } from "../lib/constants";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;