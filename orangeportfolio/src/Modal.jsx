import * as React from "react";
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
  width: 890,
  bgcolor: "#FEFEFE",
  boxShadow: 24,
  p: 4,
};

const position = {
  display: "flex",
  gap: "16px",
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicionar Projeto
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Selecione o conteúdo que você deseja fazer upload
          </Typography>
          <div>
            <InputFileUpload />
          </div>
          <TextField
            sx={{ width: 413 }}
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
            rows={4}
          />
          <Link
            href="#"
            underline="none"
            sx={{
              color: "#515255",
            }}
          >
            {" "}
            Cadastre-se
          </Link>
          <div>
            <Box sx={position}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  display: "block",
                  width: "101px",
                  height: "42px",
                  background: "linear-Gradient(#FF8833, #FF5522)",
                }}
              >
                SALVAR
              </Button>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  display: "block",
                  width: "101px",
                  height: "42px",
                  color: "#3A3A3A",
                  backgroundColor: "#DFDFDF",
                }}
              >
                SALVAR
              </Button>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
