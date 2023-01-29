import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@mui/material";

export default {
  title: "Base/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "select" },
    },
    size: {
      options: ["lg", "sm"],
      control: { type: "select" },
      defaultValue: "lg",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
