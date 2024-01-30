import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ImageIcon from "@mui/icons-material/Image";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",

  width: 1,
});

const UploadText = styled("span")({
  textTransform: "none",
  color: "#333",
});

const UploadFile = styled(Button)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "400px",
  height: "330px",
  background: "#E6E9F2",
  color: "000",
  "&:hover": {
    background: "#DFDFDF",
  },
});

const ImageIconCustom = styled(ImageIcon)({
  color: "#323232",
});

export default function InputFileUpload({ onChange }) {
  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        onChange(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <UploadFile component="label" variant="contained">
      <ImageIconCustom />

      <UploadText>Compartilhe seu talento com milhares de pessoas</UploadText>
      <VisuallyHiddenInput type="file" onChange={handleChangeFile} />
    </UploadFile>
  );
}
