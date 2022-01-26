import React from "react";
import { Box, Typography, styled } from "@mui/material";
import logo from "../assets/images/LoremIpsum.png";
import itemlogo from "../assets/images/itemlogo.png";
const StyledTypography = styled(Typography)(() => ({
  fontFamily: "Comfortaa, cursive",
  margin: "30px 40px 30px 0",
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: 600,
  textAlign: "center",
  color: "#fff",
}));

const StyledBoxHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: " rgba(255, 255, 255, 0.07)",
  backdropFilter: "blur(52px)",
  borderRadius: "8px",
  height: "90px",
  width: "96vw",
  margin: "36px 32px 36px 32px",
}));
const StyledBoxMenu = styled(Box)(() => ({
  display: "flex",

  alignItems: "center",
  justifyContent: "space-around",
}));
const Header = () => {
  return (
    <StyledBoxHeader>
      <Box sx={{ margin: "32px 10% 32px 43px", position: "relative" }}>
        <img src={logo} alt="logo" />
        <img
          src={itemlogo}
          alt="logo"
          style={{
            margin: "32px 10% 32px 43px",
            position: "absolute",
            left: "152px",
            top: "-10px",
          }}
        />
      </Box>
      <StyledBoxMenu>
        <StyledTypography>Home</StyledTypography>
        <StyledTypography>Sobre nós</StyledTypography>
        <StyledTypography>Serviços</StyledTypography>
        <StyledTypography>Blog</StyledTypography>
      </StyledBoxMenu>
    </StyledBoxHeader>
  );
};

export default Header;
