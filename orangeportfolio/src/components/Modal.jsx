import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Link, Chip } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InputFileUpload from "./Upload";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { useAuth } from "../contexts/AuthContext";

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
  const [imgDataUrl, setImgDataUrl] = useState(null);
  const [link, setLink] = React.useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleViewModalOpen = () => setViewModalOpen(true);
  const handleViewModalClose = () => setViewModalOpen(false);
  const [showImage, setShowImage] = useState(false);
  const {user} = useAuth();
  const [idUser, setIdUser] = useState(user ? user.id : "");
  console.log(idUser,"esse e o id do usuario")
  useEffect(() => {
    if (user) {
      // Atualiza o idUser quando o usuário mudar
      setIdUser(user.id);
    }
  }, [user]);
  const userName = user ? `${user.firstName} ${user.lastName}` : "Nome do Usuário";
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeImg = (imgDataUrl) => {
    setUploadImg(imgDataUrl);
    setImgDataUrl(imgDataUrl);
    setShowImage(true);
  };
  const [formData, setFormData] = useState({
    userId: idUser,
    title: "",
    tags: "",
    description: "",
    date: "2024-02-02",
  });

  const handleCancel = () => {
    setFormData({
      userId: "",
      title: "",
      tags: "",
      description: "",
      date: "",
      link: "",
    });
    setLink("");
    setUploadImg(null);
    setShowImage(false);
  };

  const handleFormProject = (event, name) => {
    if (name === "tags") {
      const tagsArray = event.target.value.split(",");
      setFormData({
        ...formData,
        [name]: tagsArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: event.target.value,
      });
    }
  };
  const { token } = useAuth();

  const uploadBase64Image = (base64,idProject) => {
    fetch(base64)
      .then((res) => res.blob())
      .then((blob) => {
        const fd = new FormData();
        const file = new File([blob], "filename.jpeg");
        fd.append("image", file);
        const API_URL = `http://ec2-3-91-42-31.compute-1.amazonaws.com:8085/api/project/image/${idProject}`;
        fetch(API_URL, {
          method: "POST",
          body: fd,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Erro ao enviar o arquivo: " + res.status);
            }
            console.log("Arquivo enviado com sucesso!");
          })
          .catch((error) => console.error("Erro ao enviar o arquivo:", error));
      })
      .catch((error) => console.error("Erro ao converter o arquivo:", error));
  };
  

  const handleProject = async () => {
    try {
      const response = await fetch("http://ec2-3-91-42-31.compute-1.amazonaws.com:8085/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: formData.userId,
          title: formData.title,
          tags: formData.tags,
          description: formData.description,
          date: formData.date,
        }),
      });

      if (response.ok) {
        console.log("cadastro de projeto bem sucedido");
        const data = await response.json();
        const idProject = data.id;
        console.log("id enviado", idProject);
        setOpenModal(true);
        console.log(data);
        uploadBase64Image(imgDataUrl, idProject);
        setUploadImg(null);
        setShowImage(false);
      } else {
        console.error("Erro ao cadastrar projeto");
      }
    } catch (error) {
      console.error("Erro ao cadastrar projeto", error);
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          marginTop: "10px",
          width: "200",
          height: "42",
          backgroundColor: "#E0E0E0",
          color: "#8B8B8B",
        }}
      >
        Adicionar projeto
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
                        {userName}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{}}>
                  <Typography sx={{ color: "#515255", fontSize: "1em" }}>
                    {formData.title}
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
                 s simply dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                 essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                 Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                 including versions of Lorem Ipsum.
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
              Adicionar Projeto
            </Typography>
            <Typography id="modal-modal-description" sx={{ marginTop: "1px" }}>
              Selecione o conteúdo que você deseja fazer upload
            </Typography>
            {uploadImg ? (
              <img
                src={uploadImg}
                alt="Imagem Selecionada"
                value={formData.image}
                onChange={(e) => {
                  handleFormProject(e, "image");
                }}
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
                onClick={() => {
                  handleProject();
                  handleCancel();
                }}
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
                onClick={() => {
                  handleClose();
                  handleCancel();
                }}
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
                  "@media screen and (max-width: 740px)": {
                    "&.editProject2": {
                      display: "block", 
                    }
                  }
                },
              }}
              className="editProject2"
            >
              Adicionar Projeto
            </Typography>
            <TextField
              id="outlined-basic"
              label="Título"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={formData.title}
              onChange={(e) => {
                handleFormProject(e, "title");
              }}
            />
            <TextField
              id="outlined-basic"
              label="Tags"
              variant="outlined"
              value={formData.tags}
              onChange={(e) => {
                handleFormProject(e, "tags");
              }}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              id="outlined-basic"
              label="Link"
              variant="outlined"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Descrição"
              multiline
              rows={6}
              value={formData.description}
              onChange={(e) => {
                handleFormProject(e, "description");
              }}
              sx={{ marginBottom: "20px" }}
            />
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            minWidth: "300px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography id="modal-modal-title">
              Projeto Adicionado com sucesso
            </Typography>
            <CheckCircleIcon sx={{ margin: "0 auto", color: "#118822" }} />
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                handleClose();
                setOpenModal(false);
              }}
              sx={{
                marginTop: "10px",
                background: "linear-Gradient(#FF8833, #FF5522)",
              }}
            >
              VOLTAR PARA PROJETOS
            </Button>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
