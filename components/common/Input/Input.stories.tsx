import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";
import SearchIcon from "assets/icons/Search.svg";
import { DarkThemeDecorator } from "lib/storybookDecorators";

const meta = {
  title: "Shared/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    name: "text",
    label: "Текст",
    value: "текст",
    onChange: () => {},
  },
};

export const Text_Dark: Story = {
  args: {
    name: "text",
    label: "Текст",
    value: "текст",
    onChange: () => {},
  },
};
Text_Dark.decorators = [DarkThemeDecorator];

export const Password: Story = {
  args: {
    type: "password",
    name: "pass",
    label: "Пароль",
    value: "pass",
    onChange: () => {},
  },
};

export const WithIcon: Story = {
  args: {
    name: "icon",
    label: "С иконкой",
    Icon: SearchIcon,
    value: "текст",
    onChange: () => {},
  },
};

export const WithIcon_Dark: Story = {
  args: {
    name: "icon",
    label: "С иконкой",
    Icon: SearchIcon,
    value: "текст",
    onChange: () => {},
  },
};
WithIcon_Dark.decorators = [DarkThemeDecorator];

export const CustomTextColor: Story = {
  args: {
    label: "Красный текст",
    name: "customText",
    className: "text-red-500",
    value: "текст",
    onChange: () => {},
  },
};
