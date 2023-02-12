import React from "react";
import Button from "@mui/material/Button";
import { signInGoogle } from "@/lib/auth";

const SignIn = () => {
  return (
    <Button variant={"contained"} onClick={signInGoogle}>
      Sign in with Google
    </Button>
  );
};

export default SignIn;
