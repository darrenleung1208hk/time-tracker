import React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { signInGoogle } from "@/lib/auth";
import Layout from "@/layout/Layout";

function App() {
  return (
    <Layout>
      <Paper variant={"outlined"} sx={{ p: 4, textAlign: "center" }}>
        <Button variant={"contained"} onClick={signInGoogle}>
          Sign in with Google
        </Button>
      </Paper>
    </Layout>
  );
}

export default App;
