import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar as SidebarComponent } from "./";
import { DarkThemeDecorator } from "lib/storybookDecorators";

const meta = {
  title: "Sidebar",
  component: SidebarComponent,
} satisfies Meta<typeof SidebarComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sidebar: Story = {
  args: { isAuth: true },
};

export const Sidebar_Dark: Story = {
  args: { isAuth: true },
};
Sidebar_Dark.decorators = [DarkThemeDecorator];
