import React, { useState } from "react";
import { TextField, useMediaQuery, useTheme } from "@mui/material";
import ButtonLargerM from "./ButtonLargM";
import styled from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        console.log("login bem-sucedido");
        const data = await response.json();
        console.log(data)
        const token = data.token;
        setAuthToken(token);
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
      <Typography
        variant="h5"
        component="h2"
        sx={{ marginBottom: "1.5em", color: "#515255" }}
      >
        Faça login com email
      </Typography>
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
      <ButtonLargerM onClick={handleLogin}>ENTRAR</ButtonLargerM>
      <Link
        to={"/cadastro"}
        style={{
          color: "#818388",
          marginLeft: "10px",
          marginTop: "18px",
          fontFamily: "Roboto",
          textDecoration: "none",
        }}
      >
        {" "}
        Cadastre-se
      </Link>
    </Container>
  );
}

export default FormLoginM;
