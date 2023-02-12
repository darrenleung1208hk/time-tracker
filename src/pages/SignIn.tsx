import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { signInGoogle } from "@/lib/auth";

const SignIn = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "80vh" }}
    >
      <Typography variant={"h4"} fontWeight={700} paragraph>
        Time Tracker
      </Typography>
      <Typography fontWeight={700} paragraph>
        Help you to manage your time.
      </Typography>
      <Button variant={"contained"} onClick={signInGoogle}>
        Sign in with Google
      </Button>
    </Stack>
  );
};

export default SignIn;
