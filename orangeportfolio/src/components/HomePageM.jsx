import React, { useState, useEffect, useContext } from "react";
import ResponsiveAppBar from "./AppBarM";
import { Container, Typography, Box, TextField } from "@mui/material";
import Avatar from "../assets/img/googlebtn.png";
import AddProject from "./Modal";
import ProjectListM from "./ProjectListM";
import { useAuth } from "../contexts/AuthContext";
function HomePageM() {
 
  const {user} = useAuth();
  console.log("esse e o user",user);
  const userName = user ? `${user.firstName} ${user.lastName}` : "Nome do Usuário";
  console.log("user name")
  return (
    <div>
      <ResponsiveAppBar />
      <Container
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "112px",
          "@media (max-width: 899px)": {
            flexDirection: "column",
          },
        }}
      >
       <img
        src={Avatar}
        alt=""
        style={{
        borderRadius: "50%",
        width: "122px",
        height: "122px",
        marginLeft: "40px",
        }}
/>
        <Box sx={{ marginLeft: "50px" }}>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "60px",
            }}
          >
            {userName}
          </Typography>
          <AddProject />
        </Box>
      </Container>
      <Box sx={{ marginTop: "100px", marginLeft: "30px" }}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "24px",
            marginLeft: "10px",
            lineHeight: "60px",
          }}
        >
          Meus Projetos
        </Typography>

        <TextField
          sx={{
            width: "517px",
            m: 1,
            mb: "16px",
            "@media (max-width: 592px)": {
              width: "312px",
              mb: "16px",
            },
          }}
          label="Buscar Tags"
        />
      </Box>
      <ProjectListM />
    </div>
  );
}
export default HomePageM;
