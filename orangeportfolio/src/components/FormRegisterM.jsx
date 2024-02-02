import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import ButtonLargerM from "./ButtonLargM";
import styled from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // const setAlertOpen = useState(false);

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch("http://localhost:8085/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("resposta status:", response.status);

      if (response.status === 200) {
        console.log("Cadastro efetuado com sucesso");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        const errorJson = await response.json();
        console.error("Erro de resposta da API:", errorJson);
      }
    } catch (err) {
      console.error("Erro no cadastro:", err);
    } finally {
      setFormSubmitted(true);
    }
  };

  const togglePass = () => {
    setShowPass(!showPass);
  };

  return (
    <Container>
      {formSubmitted && (
        <Alert
          variant="filled"
          severity="success"
          sx={{ width: "20em", margin: "0 auto" }}
        >
          Cadastro realizado com sucesso
        </Alert>
      )}

      <Title>Cadastre-se</Title>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "250.5px", mb: "16px" },
          "@media (max-width: 592px)": {
            "& > :not(style)": {
              width: "312px",
              margin: "auto",
              mb: "16px",
            },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-controlled"
          label="Nome"
          value={formData.lastName}
          required
          onChange={(e) => {
            handleFormEdit(e, "lastName");
          }}
          sx={{
            "@media (max-width: 592px)": {
              display: "flex",
            },
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Sobrenome"
          required
          value={formData.firstName}
          onChange={(e) => {
            handleFormEdit(e, "firstName");
          }}
          sx={{
            "@media (max-width: 592px)": {
              display: "flex",
            },
          }}
        />
      </Box>
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
        label="Email"
        required
        value={formData.email}
        onChange={(e) => {
          handleFormEdit(e, "email");
        }}
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
        label="Senha"
        required
        value={formData.password}
        onChange={(e) => {
          handleFormEdit(e, "password");
        }}
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
      <ButtonLargerM onClick={handleForm}>CADASTRAR</ButtonLargerM>
    </Container>
  );
}

export default FormRegister;
