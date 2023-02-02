import React, { useState } from "react";
import { default as MuiBottomNavigation } from "@mui/material/BottomNavigation";
import { default as MuiBottomNavigationAction } from "@mui/material/BottomNavigationAction";
import {
  FormatListBulleted as FormatListBulletedIcon,
  BarChart as BarCharIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

enum NavigationValue {
  Browse = "browse",
  Statistics = "statistics",
  Search = "search",
}

const actions = [
  {
    label: "Browse",
    value: "browse",
    icon: <FormatListBulletedIcon />,
  },
  {
    label: "Statistics",
    value: "statistics",
    icon: <BarCharIcon />,
  },
  {
    label: "Search",
    value: "search",
    icon: <SearchIcon />,
  },
];

const getNavigationIndex = (value: NavigationValue) =>
  actions.findIndex((action) => action.value === value);

type Props = {
  onChange?: (event: React.SyntheticEvent<Element, Event>) => void;
};

const BottomNavigationBar = ({ onChange }: Props) => {
  const [value, setValue] = useState<NavigationValue>(NavigationValue.Browse);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: NavigationValue,
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
        pt: "12px",
        pb: "36px",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        filter: "drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.05));",
      }}
    >
      <motion.div
        animate={{ x: `${100 * (getNavigationIndex(value) - 1)}%` }}
        style={{ position: "absolute", width: `min(168px, ${100 / 3}vw)` }}
      >
        <Box
          bgcolor={"primary.light"}
          width={"64px"}
          height={"32px"}
          borderRadius={4}
          mx={"auto"}
        />
      </motion.div>
      {actions.map((action, index) => (
        <MuiBottomNavigationAction
          {...action}
          key={index}
          disableTouchRipple
          icon={
            <Box
              color={action.value === value ? "primary.dark" : undefined}
              px={"20px"}
              py={"4px"}
              borderRadius={"32px"}
            >
              {action.icon}
            </Box>
          }
          sx={{
            color: "primary.main",
            fontSize: "12px",
            "& .Mui-selected": { color: "primary.dark" },
            "& .MuiBottomNavigationAction-label": { mt: 1 },
            "& .MuiBottomNavigationAction-label.Mui-selected": {
              fontSize: "12px",
            },
          }}
        />
      ))}
    </MuiBottomNavigation>
  );
};

export default BottomNavigationBar;
