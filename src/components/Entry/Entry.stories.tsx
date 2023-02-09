import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Entry from "./Entry";

export default {
  title: "Base/Entry",
  component: Entry,
  argTypes: {
    category: {
      defaultValue: "lorem",
    },
    title: {
      defaultValue: "Lorem ipsum...",
    },
  },
} as ComponentMeta<typeof Entry>;

const Template: ComponentStory<typeof Entry> = (props) => <Entry {...props} />;

export const Default = Template.bind({});
