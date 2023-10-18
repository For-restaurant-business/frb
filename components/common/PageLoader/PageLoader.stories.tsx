import type { Meta, StoryObj } from "@storybook/react";
import PageLoaderComponent from ".";

const meta = {
  title: "Shared/PageLoader",
  component: PageLoaderComponent,
} satisfies Meta<typeof PageLoaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageLoader: Story = {
  args: {},
};
