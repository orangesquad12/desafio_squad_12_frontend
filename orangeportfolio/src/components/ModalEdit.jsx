import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Link } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputFileUpload from "./Upload";

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
  const [uploadImg, setUploadImg] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeImg = (imgDataUrl) => {
    setUploadImg(imgDataUrl);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
            textTransform:"none",
            color: "#8B8B8B",
        }}
      >
        Editar
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
           Editar Projeto
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
        </Box>
      </Modal>
    </div>
  );
}