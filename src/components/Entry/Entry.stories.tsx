import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
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
    duration: {
      defaultValue: 1,
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof Entry>;

const Template: ComponentStory<typeof Entry> = (props) => <Entry {...props} />;

export const Default = Template.bind({});
