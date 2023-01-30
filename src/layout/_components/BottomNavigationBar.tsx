import React, { useState } from "react";
import { default as MuiBottomNavigation } from "@mui/material/BottomNavigation";
import { default as MuiBottomNavigationAction } from "@mui/material/BottomNavigationAction";
import {
  FormatListBulleted as FormatListBulletedIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";

const actions = [
  {
    label: "Browse",
    value: "browse",
    icon: <FormatListBulletedIcon />,
  },
  {
    label: "Statistics",
    value: "statistics",
    icon: <FavoriteIcon />,
  },
  {
    label: "Search",
    value: "search",
    icon: <LocationOnIcon />,
  },
];

type Props = {
  onChange?: (event: React.SyntheticEvent<Element, Event>) => void;
};

const BottomNavigationBar = ({ onChange }: Props) => {
  const [value, setValue] = useState<"browse" | "statistics" | "search">(
    "browse",
  );

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: "browse" | "statistics" | "search",
  ) => {
    setValue(newValue);
    onChange?.(event);
  };

  return (
    <MuiBottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{
        py: "12px",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        filter: "drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.05));",
      }}
    >
      {actions.map(({ label, value, icon }, index) => (
        <MuiBottomNavigationAction
          key={index}
          label={label}
          value={value}
          icon={icon}
        />
      ))}
    </MuiBottomNavigation>
  );
};

export default BottomNavigationBar;
