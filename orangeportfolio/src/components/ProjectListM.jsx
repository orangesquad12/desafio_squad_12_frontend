import { Box, Typography, Toolbar, Grid, Chip} from "@mui/material"
import transferirImage from '../assets/img/img_projeto.png'
import Avatar from  '../assets/img/Avatar.png'
import Edit from "./Edit"

const projects = [
    {
        id:1,
        title:
        'Camila Soares',
        avatar: Avatar,
        tag:  [<Chip key="1" label="UX" />, <Chip key="2" label="web" />],
        thumb: transferirImage,
        
    },
    {
        id:2,
        title:
        'Camila Soares',
        avatar: Avatar,
        tag:  [<Chip key="1" label="UX" />, <Chip key="2" label="web" />],
        thumb: transferirImage,
    },
    {
        id:3,
        title:
        'Camila Soares',
        avatar: Avatar,
        tag:  [<Chip key="1" label="UX" />, <Chip key="2" label="web" />],
        thumb: transferirImage,
    },
    {
        id:4,
        title:
        'Camila Soares',
        avatar: Avatar,
        tag:  [<Chip key="1" label="UX" />, <Chip key="2" label="web" />],
        thumb: transferirImage, 
    },
    {
        id:5,
        title:
        'Camila Soares',
        avatar: Avatar,
        tag:  [<Chip key="1" label="UX" />, <Chip key="2" label="web" />],
        thumb: transferirImage,
    },
    {
        id:6,
        title:
        'Camila Soares',
        avatar: Avatar,
        tag:  [<Chip key="1" label="UX" />, <Chip key="2" label="web" />],
        thumb: transferirImage,
    }
]


function ProjectList() {
    return( 
    <Box p={8} sx={{display:'flex'}}>
        <Toolbar />
         <Grid container spacing={2}>
            {
                projects.map((item,index) =>(
                    <Grid item key={item.id} lg={3} md={4} sm={6} xs={12} justifyContent='center'>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <img 
                                    src={item.thumb} 
                                    alt={item.title}
                                    style={{ maxWidth: '100%', width: '100%' }} 
                                />
                                <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                                    <Edit />
                                </Box>
                            </div>                          
                            <Box sx={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginTop:'10px', maxHeight: '50px'}}>
                                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',}}>
                                        <img
                                            src={item.avatar} 
                                            style={{borderRadius:'50%',
                                            width:'24px',
                                            height:'24px',
                                            }}/>
                                        <Typography 
                                            sx={{
                                                fontFamily: 'Roboto',
                                                fontSize: '16px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: '16px',
                                                letterSpacing: '0.15px',
                                            
                                        }}>{item.title}</Typography>
                                </Box>
                                <Box>
                                    {item.tag}
                                </Box>
                            </Box> 
                        </Box> 
                    </Grid>
                ))
            }
         </Grid>
         
    </Box>
    )
}export default ProjectList