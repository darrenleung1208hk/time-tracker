import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Stack } from "@mui/material";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: "Click me!",
};

export const Variants: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="text">Text Button</Button>
    <Button variant="contained">Contained Button</Button>
    <Button variant="outlined">Outlined Button</Button>
  </Stack>
);

export const Colors: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained">Primary</Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="contained" color="error">
      Error
    </Button>
  </Stack>
);

export const Sizes: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button variant="contained" size="small">
      Small
    </Button>
    <Button variant="contained" size="medium">
      Medium
    </Button>
    <Button variant="contained" size="large">
      Large
    </Button>
  </Stack>
);
