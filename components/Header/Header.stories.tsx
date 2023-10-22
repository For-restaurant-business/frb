import type { Meta, StoryObj } from "@storybook/react";
import { Header as HeaderComponent } from "./";
import { EGlobalTheme } from "lib/constants";
import { DarkThemeDecorator } from "lib/storybookDecorators";
import { User } from "lib/types";

const meta = {
  title: "Header",
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const user: User = {
  id: "test",
  name: "Name",
  email: "example@gmeil.com",
};
export const Header: Story = {
  args: { user, theme: EGlobalTheme.LIGHT },
};

export const Header_Dark: Story = {
  args: { user, theme: EGlobalTheme.DARK },
};
Header_Dark.decorators = [DarkThemeDecorator];
