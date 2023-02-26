import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

const FloatingActionButton = () => {
  return (
    <Fab
      color="primary"
      sx={{
        borderRadius: "16px",
        position: "fixed",
        bottom: "124px",
        right: "16px",
      }}
    >
      <AddIcon
        sx={{
          fontSize: "32px",
          color: "white",
        }}
      />
    </Fab>
  );
};

export default FloatingActionButton;
