import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";

export default {
  title: "Base/BottomNavigation",
  component: BottomNavigation,
  argTypes: {
    showLabels: {
      control: "boolean",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof BottomNavigation>;

const Template: ComponentStory<typeof BottomNavigation> = (props) => (
  <BottomNavigation {...props}>
    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
  </BottomNavigation>
);

export const Default = Template.bind({});
