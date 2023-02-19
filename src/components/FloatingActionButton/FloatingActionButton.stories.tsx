import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import FloatingActionButton from "./FloatingActionButton";

export default {
  title: "Base/FloatingActionButton",
  component: FloatingActionButton,
} as ComponentMeta<typeof FloatingActionButton>;

const Template: ComponentStory<typeof FloatingActionButton> = () => (
  <FloatingActionButton />
);

export const Default = Template.bind({});
Default.args = {
  children: "Floating Action Button",
};
