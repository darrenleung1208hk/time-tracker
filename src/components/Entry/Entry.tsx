import React from "react";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import { COLOR } from "@/themes/palette";

type Props = {
  category: string;
  title: string;
  color: COLOR;
  duration: number;
};

const Entry = ({ category, title, color, duration }: Props) => {
  return (
    <Paper elevation={0} variant={"outlined"} sx={{ borderRadius: "8px" }}>
      <CardActionArea sx={{ px: 3, py: 2, borderRadius: "8px" }}>
        <Typography variant={"body2"} sx={{ mb: 1, color }}>
          #{category}
        </Typography>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={8}>
            <Typography variant={"h5"} fontWeight={"700"}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <DoubleArrowRoundedIcon sx={{ color }} />
          </Grid>
          <Grid item xs={2}>
            <Typography variant={"h5"} fontWeight={"700"} align={"right"}>
              {duration} hr
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Paper>
  );
};

export default Entry;
