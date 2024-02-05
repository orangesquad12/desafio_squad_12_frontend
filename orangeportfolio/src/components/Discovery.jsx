import AppBarM from "./AppBarM";
import AllProjectList from "./AllProjectList";
import { TextField,Box,Typography } from "@mui/material";

function Discovery() {
  return(<
    div>
        < AppBarM />
       <div style={{width:'90%', margin:'0 auto'}}> 
          <Typography
            sx={{
            fontFamily: 'Roboto',
            fontSize: '34px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '34px', /* 100% */
            letterSpacing: '0.25px',
            marginTop:'100px',
            textAlign:'center',
            '@media screen and (max-width: 700px)': {
              fontFamily: 'Roboto',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '24px' 
            }
          }}
        >
          Junte-se à comunidade de inovação, inspiração e descobertas, 
          transformando experiências em conexões inesquecíveis
        </Typography>
      </div>
        <Box sx={{ marginTop: "100px", marginLeft: "30px" }}>          
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
        <AllProjectList/>
    </div>
  );
}

export default Discovery;
