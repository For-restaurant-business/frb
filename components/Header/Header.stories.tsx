import type { Meta, StoryObj } from "@storybook/react";
import HeaderComponent from "./";
import { EGlobalTheme } from "lib/constants";
import { DarkThemeDecorator } from "lib/storybookDecorators";

const meta = {
  title: "Header",
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: { user: null, theme: EGlobalTheme.LIGHT },
};

export const Header_Dark: Story = {
  args: { user: null, theme: EGlobalTheme.DARK },
};
Header_Dark.decorators = [DarkThemeDecorator];
