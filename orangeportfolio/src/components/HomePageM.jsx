import ResponsiveAppBar from "./AppBarM";
import { Container,Typography, Box } from "@mui/material";
import Avatar from "../assets/img/Avatar.png"
import AddProject from "../Modal";

function HomePageM(){
    return(
       <div>
        <ResponsiveAppBar/>
        <Container disableGutters sx={{display:'flex', 
        justifyContent:'center',
        alignItems: 'center',
        marginTop:'112px',
        '@media (max-width: 899px)': {
            flexDirection: 'column' 
        }}}>
            <img src={Avatar} alt="" style={{borderRadius: '50%',
                 width: '122px', 
                 height: '122px',
                 marginLeft:'40px'
                }} />
            <Box sx={{marginLeft:'50px'}}>
                <Typography sx={{fontFamily:'Roboto',
                    fontSize:'24px',
                    fontStyle:'normal',
                    fontWeight:'400',
                    lineHeight:'60px'}}>
                    Camila Soares
                </Typography>
                <AddProject/>
            </Box>
        </Container>
       </div>
    )
}
export default HomePageM