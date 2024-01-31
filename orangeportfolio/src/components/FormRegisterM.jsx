import React, { useState } from "react";
import StateTextFields from "./DoubleTextFieldM";
import { TextField, useMediaQuery, useTheme } from "@mui/material";
import ButtonLargerM from "./ButtonLargM";
import styled from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
const Title = styled.h1`
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /;
    color: #222244;
    text-align:center;
    margin-bottom: 16px;
    @media (max-width: 592px) {
      font-size: 30px;
      line-height: 24px;
      margin-bottom: 24px;
  }
`;

const EyeIcon = styled.div`
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function FormRegister() {
  const [showPass, setShowPass] = useState(false);

  const togglePass = () => {
    setShowPass(!showPass);
  };
  return (
    <Container>
      <Title>Cadastre-se</Title>
      <StateTextFields />
      <TextField
        sx={{
          width: "517px",
          m: 1,
          mb: "16px",
          "@media (max-width: 592px)": {
            width: "312px",
            height: "auto",
            margin: "auto",
            mb: "16px",
          },
        }}
        label="Email address"
      />
      <TextField
        sx={{
          width: "517px",
          m: 1,
          mb: "16px",
          "@media (max-width: 592px)": {
            width: "312px",
            height: "auto",
            margin: "auto",
            mb: "16px",
          },
        }}
        label="Password"
        type={showPass ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <EyeIcon>
              <InputAdornment position="end" onClick={togglePass}>
                <RemoveRedEyeIcon />
              </InputAdornment>
            </EyeIcon>
          ),
        }}
      />
      <ButtonLargerM>CADASTRAR</ButtonLargerM>
    </Container>
  );
}

export default FormRegister;
