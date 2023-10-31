import type { Meta, StoryObj } from "@storybook/react";
import ButtonAddMenuPositionComponent from ".";
import { DarkThemeDecorator } from "lib/storybookDecorators";

const meta = {
  title: "Shared/ButtonAddMenuPosition",
  component: ButtonAddMenuPositionComponent,
} satisfies Meta<typeof ButtonAddMenuPositionComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonAddMenuPosition: Story = {
  args: {},
};

export const ButtonAddMenuPosition_Dark: Story = {
  args: {},
};
ButtonAddMenuPosition_Dark.decorators = [DarkThemeDecorator];
