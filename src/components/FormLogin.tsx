import React, { useState } from "react";

import {
  Box,
  Typography,
  Button,
  styled,
  Checkbox,
  FormControlLabel,
  Link,
  useTheme,
} from "@mui/material";

import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 300px;
  height: 45px;
  font-size: 0.875rem;
  
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? "#ffffff" : "#fafafa"};
  background: ${theme.palette.mode === "dark" ? "#224957cc" : "#224957"};
  border: 1px solid ${theme.palette.mode === "dark" ? "#224957cc" : "#224957"};
  border-radius: 10px;
  padding: 12px 12px;
  transition: all 150ms ease;
  margin-top: 8px;

  &:hover {
   
    border-color: ${theme.palette.mode === "dark" ? "#224957cc" : "#224957cc"};
  }

  &:focus {
    outline: none;
    outline-offset: 2px;
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});
const FormLogin = () => {
  const [checked, setChecked] = useState(true);
  const { palette } = useTheme();

  function handleChecked(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
  }
  return (
    <Box
      sx={{
        marginTop: "15%",
        color: `${palette.mode === "dark" ? "primary" : "secondary"}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "347px",
        height: "408px",

        padding: "8px",
      }}
    >
      <Typography variant="h2">Sign in</Typography>
      <Typography variant="subtitle1" sx={{ fontSize: "0.9rem" }}>
        Sign in and start managing your candidates!
      </Typography>

      <CustomInput aria-label="Demo input" placeholder="Login" />
      <CustomInput
        aria-label="Demo input"
        placeholder="Password"
        type="password"
      />
      <Box
        sx={{
          display: "flex",

          width: "300px",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Montserrat,  sans-serif",
        }}
      >
        <FormControlLabel
          label="Remember me"
          control={
            <Checkbox
              checked={checked}
              onChange={handleChecked}
              size="small"
              color={palette.mode === "dark" ? "primary" : "secondary"}
              sx={{
                "& .MuiSvgIcon-root": {
                  marginTop: "-0.3rem",

                  border: "none",
                },
              }}
            />
          }
          labelPlacement="end"
        />
        <Link
          sx={{
            color: `${palette.mode === "dark" ? "#20DF7F" : "#000"}`,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Forgot password?
        </Link>
      </Box>
      <Button
        sx={{
          backgroundColor: "#20DF7F",
          color: `${palette.mode === "dark" ? "#fff" : "#224957"}`,
          fontWeight: "bold",
          width: "300px",
          height: "40px",
          borderRadius: "10px",
          marginTop: "8px",
          "&:hover": {
            backgroundColor: "#20DF7Fcc",
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default FormLogin;
