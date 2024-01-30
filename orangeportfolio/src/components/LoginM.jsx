import LoginImg from "../assets/img/imglogin.png";
import FormLoginM from "./FormLoginM";
import FormRegisterM from "./FormRegisterM";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";

function LoginM() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Container disableGutters sx={{ minWidth: "100%", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100%",
          "@media (max-width: 1200px)": {
            width: "100%",
          },
        }}
      >
        {isWideScreen && <img src={LoginImg} alt="" style={{ width: "40%" }} />}

        <Box
          sx={{
            width: "65%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 1200px)": {
              width: "100%",
            },
          }}
        >
          <FormLoginM />
        </Box>
      </Box>
    </Container>
  );
}
export default LoginM;
