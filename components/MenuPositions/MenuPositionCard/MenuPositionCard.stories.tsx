import type { Meta, StoryObj } from "@storybook/react";
import MenuPositionCardComponent from ".";
import { DarkThemeDecorator } from "lib/storybookDecorators";

const meta = {
  title: "Shared/MenuPositionCard",
  component: MenuPositionCardComponent,
} satisfies Meta<typeof MenuPositionCardComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuPositionCard: Story = {
  args: {
    id: "test1",
    name: "Название позиции меню",
    category: "категория позиции",
  },
};

export const MenuPositionCard_Dark: Story = {
  args: {
    id: "test2",
    name: "Название позиции меню 2",
    category: "категория позиции 2",
  },
};
MenuPositionCard_Dark.decorators = [DarkThemeDecorator];
