import { ComponentType } from "react";

export const DarkThemeDecorator = (Story: ComponentType): JSX.Element => (
  <div className="dark">
    <Story />
  </div>
);
