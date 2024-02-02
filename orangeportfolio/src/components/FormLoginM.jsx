import React, { useState } from "react";
import StateTextFields from "./DoubleTextFieldM";
import { TextField, useMediaQuery, useTheme} from "@mui/material";
import ButtonLargerM from "./ButtonLargM";
import styled from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
import Googlebtn from "../assets/img/googlebtn.png"
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"

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
  const { setAuthToken } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const togglePass = () => {
    setShowPass(!showPass);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8085/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (response.ok) {
        console.log("login bem-sucedido");
        const data = await response.json();
        console.log(data)
        setAuthToken(data.token);
        navigate("/portfolio");
       
      } else {
      
        console.error("Erro ao fazer login");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
      <ButtonLargerM  onClick={handleLogin}>ENTRAR</ButtonLargerM>
      <Link
        to={"/cadastro"}
        style={{
          color: "#818388",
          marginLeft: "10px",
          marginTop: "18px",
          textDecoration: "none"
        }}
      >
        {" "}
        Cadastre-se
      </Link>
    </Container>
  );
}

export default FormLoginM;
