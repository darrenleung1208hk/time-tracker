import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { COLOR } from "@/themes/palette";

type Props = {
  category: string;
  title: string;
  color: COLOR;
};

const Entry = ({ category, title, color }: Props) => {
  return (
    <Paper
      elevation={0}
      variant={"outlined"}
      sx={{ p: 3, borderRadius: "8px" }}
    >
      <Typography variant={"body2"} sx={{ mb: 1, color }}>
        #{category}
      </Typography>
      <Typography variant={"h5"} fontWeight={"700"}>
        {title}
      </Typography>
    </Paper>
  );
};

export default Entry;
