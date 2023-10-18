import type { Meta, StoryObj } from "@storybook/react";
import LoaderComponent from ".";

const meta = {
  title: "Shared/Loader",
  component: LoaderComponent,
} satisfies Meta<typeof LoaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loader: Story = {
  args: {},
};
