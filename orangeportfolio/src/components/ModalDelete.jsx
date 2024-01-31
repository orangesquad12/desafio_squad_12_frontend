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
  top: "45%",
  left: "50%",
  gap: "16px",
  transform: "translate(-50%, -50%)",
  maxWidth: "890px",
  width: "40vh",
  height:"auto",
  bgcolor: "#FEFEFE",
  boxShadow: 24,
  
  justifyContent:"center",
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
            textTransform:"none",
            color: "#8B8B8B",
        }}
      >
        Excluir
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{display:"flex", flexDirection:"column", padding:"0px"}}>
                <Typography
                    id="modal-modal-title"
                    component="h2"
                    sx={{ color: "#515255", textAlign:"left", mb:"20px",fontSize: "1.3rem", paddingTop:"1rem", marginLeft:"1rem",  }}
                >
                    Deseja Excluir?
                </Typography>
                <Typography
                    id="modal-modal-title"
                   
                    component="h2"
                    sx={{ color: "#515255", textAlign:"left",fontSize: "1.1rem", marginLeft:"1rem", marginRight:"1rem" }}
                >
                Se você prosseguir irá excluir o projeto do seu portfólio
                </Typography>
          </Box>
            <Box sx={{display:"flex", justifyContent:"flexStart",marginLeft:"1rem",marginBottom:"1rem"}}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  display: "block",
                  marginTop: "16px",
                  width: "101px",
                  height: "42px",
                  background: "linear-Gradient(#FF8833, #FF5522)",
                  marginRight:"15px",
                }}
              >
                SALVAR
              </Button>

           
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
            
            </Box>
          
        </Box>
      </Modal>
    </div>
  );
}
