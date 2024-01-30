import React, { useState } from "react";
import StateTextFields from "./DoubleTextFieldM";
import { TextField, useMediaQuery, useTheme, Link } from "@mui/material";
import ButtonLargerM from "./ButtonLargM";
import styled from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
import Googlebtn from "../assets/img/googlebtn.png";

const Title = styled.h1`
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /;
    color: #222244;
    text-align:center;
    margin-bottom: 32px;
    @media (max-width: 592px) {
      font-size: 24px;
      line-height: 24px;
  }
`;

const EyeIcon = styled.div`
  cursor: pointer;
`;

const Google = styled.a`
  margin: 0 auto;
  margin-bottom: 32px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function FormLoginM() {
  const [showPass, setShowPass] = useState(false);

  const togglePass = () => {
    setShowPass(!showPass);
  };

  return (
    <Container>
      <Title>Entre no Orange Portfólio</Title>
      <Google href="#">
        <img src={Googlebtn} alt="Imagem Login" />
      </Google>
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
      <ButtonLargerM>ENTRAR</ButtonLargerM>
      <Link
        href="#"
        underline="none"
        sx={{
          color: "#818388",
          marginLeft: "10px",
          marginTop: "18px",
        }}
      >
        {" "}
        Cadastre-se
      </Link>
    </Container>
  );
}

export default FormLoginM;
