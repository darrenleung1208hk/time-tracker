import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useAuth } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";

export const Login = () => {
  const navigate = useNavigate();
  const { logInGoogle, user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate(ROUTES.HOME);
    }
  }, [user]);

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
      <Button variant={"contained"} onClick={logInGoogle}>
        Sign in with Google
      </Button>
    </Stack>
  );
};
