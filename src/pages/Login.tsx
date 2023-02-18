import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useAuth } from "@/lib/auth";
import { ROUTES } from "@/routes";

export const Login = () => {
  const navigate = useNavigate();
  const { logInGoogle } = useAuth();

  const handleClick = async () => {
    try {
      await logInGoogle();
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

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
      <Button variant={"contained"} onClick={handleClick}>
        Sign in with Google
      </Button>
    </Stack>
  );
};
