import React from "react";
import Login from "./pages/Login";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

function App() {
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
      <Login />

      <Footer />
    </Box>
  );
}

export default App;
