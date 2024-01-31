import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Link } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputFileUpload from "./Upload";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Avatar from "../assets/img/Avatar.png";
import transferirImage from "../assets/img/img_projeto.png";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  gap: "16px",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "890px",
  bgcolor: "#FEFEFE",
  boxShadow: 24,

  p: 4,
};

const projects = [
  {
    id: 1,
    avatar: Avatar,
    title: "Ecommerce One Page",
    tag: [<Chip key="1" label="UX" />, <Chip key="2" label="Web" />],
    thumb: transferirImage,
    author: "Camila Soares",
    date: "12/12",
    description:
      "Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce.",

    subtitle: "Download",
    link: "https://gumroad.com/products/wxCSL",
  },
];

const modalProjectAdd = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  gap: "16px",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "890px",
  bgcolor: "#FEFEFE",
  boxShadow: 24,

  p: 4,
};

const txtStyleSpace = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginTop: "16px",
};
const formStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
};

const position = {
  display: "flex",
  gap: "16px",
};

const cancelarbtn = {
  "&:hover": {
    backgroundColor: "#C1B3B3",
  },
};

export default function AddProject() {
  const [open, setOpen] = React.useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [uploadImg, setUploadImg] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleViewModalOpen = () => setViewModalOpen(true);
  const handleViewModalClose = () => setViewModalOpen(false);

  const handleChangeImg = (imgDataUrl) => {
    setUploadImg(imgDataUrl);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          width: "200",
          height: "42",
          backgroundColor: "#E0E0E0",
          color: "#8B8B8B",
        }}
      >
        Adicionar Projeto
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "#515255" }}
          >
            Adicionar Projeto
          </Typography>
          <div style={formStyle}>
            <div style={txtStyleSpace}>
              {uploadImg ? (
                <img
                  src={uploadImg}
                  alt="Imagem Selecionada"
                  style={{ maxWidth: "100%", height: "380px" }}
                />
              ) : (
                <>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Selecione o conteúdo que você deseja fazer upload
                  </Typography>
                  <InputFileUpload onChange={handleChangeImg} />
                </>
              )}
            </div>
            <div style={txtStyleSpace}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Título"
                variant="outlined"
              />
              <TextField
                sx={{ width: 413 }}
                id="outlined-basic"
                label="Tags"
                variant="outlined"
              />
              <TextField
                sx={{ width: 413 }}
                id="outlined-basic"
                label="Link"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={6}
              />
              <Link
                href="#"
                underline="none"
                sx={{
                  color: "#515255",
                }}
              >
                {" "}
              </Link>
            </div>
          </div>
          <div>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "#515255",
                fontWeight: "400",
                marginBottom: "16px",
              }}
              onClick={handleViewModalOpen}
            >
              {" "}
              Visualizar Publicação
            </Link>
            <div></div>
            <Box sx={position}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  display: "block",
                  marginTop: "16px",
                  width: "101px",
                  height: "42px",
                  background: "linear-Gradient(#FF8833, #FF5522)",
                }}
              >
                SALVAR
              </Button>

              <div>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={handleClose}
                  sx={{
                    display: "block",
                    marginTop: "16px",
                    width: "101px",
                    height: "42px",
                    color: "#3A3A3A",
                    backgroundColor: "#DFDFDF",
                    ...cancelarbtn,
                  }}
                >
                  CANCELAR
                </Button>
              </div>
            </Box>
          </div>
          <Modal
            open={viewModalOpen}
            onClose={handleViewModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalProjectAdd}>
              <Grid container spacing={2}>
                {projects.map((project) => (
                  <Grid item xs={12} sm={4} key={project.id}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={project.avatar}
                            alt={project.title}
                            style={{
                              borderRadius: "50%",
                              width: "64px",
                              height: "64px",
                            }}
                          />

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              marginTop: "8px",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "16",
                                color: "#515255",
                              }}
                            >
                              {project.author}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "16",
                                color: "#515255",
                                marginTop: "4px",
                              }}
                            >
                              {project.date}
                            </Typography>
                          </div>
                        </div>
                        <img
                          src={project.thumb}
                          alt="Projeto Adicionado"
                          style={{
                            marginTop: "16px",
                            width: "100%",
                            height: "auto",
                          }}
                        />

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginTop: "16px",
                            marginLeft: "16px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "16",
                              color: "#515255",
                              marginBottom: "8px",
                            }}
                          >
                            {project.description}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16",
                              color: "#515255",
                              marginBottom: "8px",
                            }}
                          >
                            {project.subtitle}
                          </Typography>
                          <Typography sx={{ fontSize: "16", color: "#515255" }}>
                            {project.link}
                          </Typography>
                        </Box>
                      </div>
                    </div>
                  </Grid>
                ))}

                {projects.map((project) => (
                  <Grid item xs={12} sm={4} key={project.id}>
                    <Typography sx={{ fontSize: "24" }}>
                      {project.title}
                    </Typography>
                  </Grid>
                ))}

                {projects.map((project) => (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    container
                    spacing={2}
                    key={project.id}
                  >
                    {project.tag.map((tag, index) => (
                      <Grid item xs={3} key={index}>
                        {tag}
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Modal>
        </Box>
      </Modal>
    </div>
  );
}
