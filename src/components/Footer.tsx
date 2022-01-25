import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import frame from "../assets/images/img1.png";
import frame2 from "../assets/images/img2.png";
import useChangeTheme from "../hooks/useChangeTheme";

const Footer = () => {
  const theme = useChangeTheme();
  const { palette } = useTheme();

  const handleClick = () => {
    const nextTheme = palette.mode === "dark" ? "light" : "dark";
    theme({ type: "CHANGE", payload: { paletteType: nextTheme } });
  };
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <IconButton
        onClick={handleClick}
        sx={{
          position: "absolute",
          margin: 0,
          bottom: "10px",
          left: "10px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <img src={frame2} alt="frame2"></img>
      </IconButton>

      <img width="100%" height="111px" src={frame} alt="frame"></img>
    </Box>
  );
};

export default Footer;
