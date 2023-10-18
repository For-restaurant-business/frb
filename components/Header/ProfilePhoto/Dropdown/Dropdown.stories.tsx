import type { Meta, StoryObj } from "@storybook/react";
import DropdownComponent from "./";
import { DarkThemeDecorator } from "lib/storybookDecorators";

const meta = {
  title: "Header/Dropdown",
  component: DropdownComponent,
} satisfies Meta<typeof DropdownComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dropdown: Story = {
  args: { isVisible: true, closeDropdown: () => {}, email: "test@gmail.com" },
};

export const Dropdown_Dark: Story = {
  args: { isVisible: true, closeDropdown: () => {}, email: "test@gmail.com" },
};
Dropdown_Dark.decorators = [DarkThemeDecorator];
