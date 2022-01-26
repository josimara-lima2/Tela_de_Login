import React from "react";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import FormLogin from "../components/FormLogin";
const Login = () => {
  return (
    <Box
      sx={{
        height: `calc(100vh + 5px )`,
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FormLogin />

      <Footer />
    </Box>
  );
};

export default Login;
