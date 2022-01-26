import React from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "../assets/images/LoremIpsum.png";
import error from "../assets/images/ERROR.png";
import error404 from "../assets/images/error404.png";
import Header from "../components/Header";
const Error = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#0B0B22",
        overflow: "hidden",
        borderRadius: "0px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          left: "350.15px",
          borderRadius: "50%",
          top: "10px",
          background: "#A4FFCE",
          transform: "matrix(0.97, -0.24, 0.25, 0.97, 0, 0)",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          left: "-200px",
          borderRadius: "50%",
          top: "40px",
          background: "#99E7EC",
          transform: " matrix(0.97, -0.24, 0.25, 0.97, 0, 0)",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          borderRadius: "50%",
          background: "#29FFE5",
          transform: "matrix(0.97, -0.24, 0.25, 0.97, 0, 0)",
          left: "900px",
          top: "-100.5px",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",

          background: "rgba(11, 11, 34, 0.9)",
          width: "100%",
          height: "100vh",
          backdropFilter: "blur(175px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "200px 0px",
          }}
        >
          <img
            style={{
              width: "781px",
              height: "135px",
            }}
            src={error}
            alt="error"
          />
          <Typography
            sx={{
              fontFamily: "Comfortaa, cursive",

              fontStyle: "normal",
              fontSize: "64px",
              lineHeight: "71px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#fff",
              letterSpacing: "-0.01em",
              position: "static",
              width: "581px",
              height: "71px",
              margin: "-40px 0 0 0",
            }}
          >
            Ooops! Error 404
          </Typography>

          <Typography
            sx={{
              color: " rgba(255, 255, 255, 0.6)",
              fontFamily: "Comfortaa, cursive",

              fontSize: "18px",
              lineHeight: "16px",
              fontWeight: "bold",
              textAlign: "center",
              width: "628px",
              height: "20px",

              padding: "30px 0px",
            }}
          >
            A página que você tentou acessar está indisponível ou não existe
          </Typography>
          <Button
            variant="text"
            sx={{
              background: "rgba(106, 229, 246, 0.1)",
              border: "1px solid rgba(106, 229, 246, 0.32)",
              boxSizing: "border-box",
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              padding: "12px 24px",
              textTransform: "none",
              marginTop: "68px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Comfortaa, cursive",
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: 600,
                textAlign: "center",
                color: "#fff",
              }}
            >
              Voltar para home
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Error;
