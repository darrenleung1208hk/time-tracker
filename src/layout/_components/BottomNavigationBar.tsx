import React, { useState } from "react";
import { default as MuiBottomNavigation } from "@mui/material/BottomNavigation";
import { default as MuiBottomNavigationAction } from "@mui/material/BottomNavigationAction";
import {
  FormatListBulleted as FormatListBulletedIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";

interface Props {
  onChange?: (event: React.SyntheticEvent<Element, Event>) => void;
}

const BottomNavigationBar = ({ onChange }: Props) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number,
  ) => {
    setValue(newValue);
    onChange?.(event);
  };

  return (
    <MuiBottomNavigation value={value} onChange={handleChange} showLabels>
      <MuiBottomNavigationAction
        label="Browse"
        icon={<FormatListBulletedIcon />}
      />
      <MuiBottomNavigationAction label="Statistics" icon={<FavoriteIcon />} />
      <MuiBottomNavigationAction label="Search" icon={<LocationOnIcon />} />
    </MuiBottomNavigation>
  );
};

export default BottomNavigationBar;
