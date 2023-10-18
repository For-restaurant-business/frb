import type { Meta, StoryObj } from "@storybook/react";
import Button, { EButtonTheme } from ".";

const meta = {
  title: "Shared/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rectangular: Story = {
  args: {
    children: "text",
    theme: EButtonTheme.RECTANGULAR,
  },
};

export const Rounded: Story = {
  args: {
    children: "text",
    theme: EButtonTheme.ROUNDED,
  },
};

export const Loading: Story = {
  args: {
    children: "text",
    theme: EButtonTheme.RECTANGULAR,
    isLoading: true,
  },
};
