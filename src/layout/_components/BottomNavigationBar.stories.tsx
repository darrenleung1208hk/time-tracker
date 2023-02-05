import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BottomNavigationBar from "./BottomNavigationBar";

export default {
  title: "Base/BottomNavigation",
  component: BottomNavigationBar,
} as ComponentMeta<typeof BottomNavigationBar>;

const Template: ComponentStory<typeof BottomNavigationBar> = (props) => (
  <BottomNavigationBar {...props} />
);

export const Default = Template.bind({});
