import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, Link } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputFileUpload from "./Upload";

const style = {
  display: "flex",
  position: "relative",
  top: "50%",
  left: "50%",
  gap: "16px",
  transform: "translate(-50%, -50%)",
  maxWidth:"890px",
  bgcolor: "#FEFEFE",
  boxShadow: 24,
  p: 4,
  "@media screen and (max-width: 740px)": {
   display: "flex",
   flexDirection: "column-reverse",
   width: "80%",
   maxHeight: "80vh", 
   overflowY: "auto",
   '.editOne': {
    display:"none"
}

  }
  
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
        
          {/* box-left*/}
          <Box >
          <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ color: "#515255", textAlign:"center",
                "&.editOne": {
                }
                }}
                className="editOne"
                >
                Editar Projeto
          </Typography>
              <Typography id="modal-modal-description" sx={{ marginTop:'1px'}}>
                    Selecione o conteúdo que você deseja fazer upload
              </Typography>
              {uploadImg ? (
                <img
                  src={uploadImg}
                  alt="Imagem Selecionada"
                  style={{ maxWidth: "100%", height: "380px", marginTop:'3px' }}
                />
              ) : (
                <>
                  <InputFileUpload onChange={handleChangeImg} />
                </>
              )}
              <Link
               underline="none"
              sx={{
                color: "#515255",
                fontFamily:"Roboto"
                
              }}
            >
              {" "}
              Visualizar Publicação
            </Link>
            <Box sx={{display:'flex', flexDirection:"row"}}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  marginTop: "10px",
                  marginRight:"10px",
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
          <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              mt: '5%',
              "@media screen and (max-width: 740px)": {
                  width: "90%",
                  marginLeft: "20px",
                  '.editProject': {
                    display:"inline"
                }

              },
           }}>
              <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#515255",
                textAlign: "center",
                marginBottom: "20px",
                "&.editProject": {
                display: "none"
              }
            }}
            className="editProject"
            >
              Editar Projeto
            </Typography>
              <TextField
                id="outlined-basic"
                label="Título"
                variant="outlined"
                sx={{marginBottom:'20px'}}
              />
              <TextField
                
                id="outlined-basic"
                label="Tags"
                variant="outlined"
                sx={{marginBottom:'20px'}}
              />
              <TextField

                id="outlined-basic"
                label="Link"
                variant="outlined"
                sx={{marginBottom:'20px'}}
              />
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={6}
                sx={{marginBottom:'20px'}}
              />
          </Box>  
        </Box>
      </Modal>
    </div>
  );
}
