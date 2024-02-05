import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Link, Chip } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputFileUpload from "./Upload";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

const style = {
  display: "flex",
  position: "relative",
  top: "50%",
  left: "50%",
  gap: "16px",
  transform: "translate(-50%, -50%)",
  maxWidth: "890px",
  bgcolor: "#FEFEFE",
  boxShadow: 24,
  p: 4,
  "@media screen and (max-width: 740px)": {
    display: "flex",
    flexDirection: "column-reverse",
    width: "80%",
    maxHeight: "80vh",
    overflowY: "auto",
    ".editOne": {
      display: "none",
    },
  },
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
  const [descricao, setDescricao] = useState("");
  const [title, setTitle] = useState("");

  const handleChangeImg = (imgDataUrl) => {
    setUploadImg(imgDataUrl);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          textTransform: "none",
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
          <Modal open={viewModalOpen} onClose={handleViewModalClose}>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                top: "50%",
                left: "50%",
                gap: "16px",
                transform: "translate(-50%, -50%)",
                maxWidth: "890px",
                bgcolor: "#FEFEFE",
                boxShadow: 24,
                p: 4,
                flexDirection: "column",
                "@media screen and (max-width: 740px)": {
                  width: "80%",
                  maxHeight: "80vh",
                  overflowY: "auto",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  maxWidth: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "1em",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <AccountCircleSharpIcon
                        color="disabled"
                        fontSize="large"
                      />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "1em", marginLeft: ".75em" }}>
                        Camila Soares
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{}}>
                  <Typography sx={{ color: "#515255", fontSize: "1em" }}>
                    {title}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: ".75em" }}>
                  <Box>
                    <Chip label="UX" />
                  </Box>
                  <Box>
                    <Chip label="Web" />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                <img
                  src={uploadImg}
                  alt="Imagem Selecionada"
                  style={{ maxWidth: "100%" }}
                />
              </Box>
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography
                  sx={{ color: "#515255", overflowWrap: "break-word" }}
                >
                  {descricao}
                </Typography>
              </Box>
            </Box>
          </Modal>

          {/* box-left*/}
          <Box>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ color: "#515255", textAlign: "center", "&.editOne": {} }}
              className="editOne"
            >
              Editar Projeto
            </Typography>
            <Typography id="modal-modal-description" sx={{ marginTop: "1px" }}>
              Selecione o conteúdo que você deseja fazer upload
            </Typography>
            {uploadImg ? (
              <img
                src={uploadImg}
                alt="Imagem Selecionada"
                style={{ maxWidth: "100%", height: "380px" }}
              />
            ) : (
              <>
                <InputFileUpload onChange={handleChangeImg} />
              </>
            )}
            <Link underline="none" onClick={handleViewModalOpen}>
              <Typography
                sx={{ color: "#515255", marginTop: "1em", cursor: "Pointer" }}
              >
                Visualizar Publicação
              </Typography>
            </Link>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  marginTop: "10px",
                  marginRight: "10px",
                  width: "7rem",
                  height: "2.7rem",
                  background: "linear-Gradient(#FF8833, #FF5522)",
                }}
              >
                SALVAR
              </Button>
              <Button
                variant="contained"
                size="medium"
                onClick={handleClose}
                sx={{
                  marginTop: "10px",
                  width: "7rem",
                  height: "2.7rem",
                  color: "#3A3A3A",
                  backgroundColor: "#DFDFDF",
                  ...cancelarbtn,
                }}
              >
                CANCELAR
              </Button>
            </Box>
          </Box>
          {/* box-right*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              mt: "5%",
              "@media screen and (max-width: 740px)": {
                width: "90%",
                marginLeft: "20px",
                ".editProject2": {
                  display: "block",
                  "@media screen and (max-width: 740px)": {
                    "&.editProject2": {
                      display: "block", 
                    }
                  }
                },
              },
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#515255",
                textAlign: "center",
                marginBottom: "20px",
                "&.editProject2": {
                  display: "none",
                },
              }}
              className="editProject2"
            >
              Editar Projeto
            </Typography>
            <TextField
              id="outlined-basic"
              label="Título"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Tags"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              id="outlined-basic"
              label="Link"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Descrição"
              multiline
              rows={6}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              sx={{ marginBottom: "20px" }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
