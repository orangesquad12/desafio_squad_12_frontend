import { Box, Typography, Toolbar, Grid, Chip} from "@mui/material"
import Avatar from  '../assets/img/Avatar.png'
import Edit from "./Edit"
import { useAuth } from "../contexts/AuthContext"
import {  useState, useEffect } from "react";


function ProjectList() {
    const {user} = useAuth();
    const userId = user.id;
    const userName = user ? `${user.firstName} ${user.lastName}` : "Nome do Usuário";
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
    if (user) { 
        fetch(`https://desafio-deploy-squad12.onrender.com/api/project/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao fazer a requisição');
                }
                return response.json();
            })
            .then(data => {
                const mappedProjects = Object.values(data).map(item => ({
                    tags: item.tags,
                    image: item.image,
                    avatar: Avatar,
                    name: userName,
                    id: item.id
                }));
                setProjects(mappedProjects);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        }
    }, [userId]);
    return( 
    <Box p={8} sx={{display:'flex'}}>
        <Toolbar />
         <Grid container spacing={2}>
            {
                projects.map((item,index) =>(
                    <Grid item key={index} lg={3} md={4} sm={6} xs={12} justifyContent='center'>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <img 
                                    src={item.image} 
                                    style={{ maxWidth: '100%', width: '100%' }} 
                                />
                                <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                                    <Edit />
                                </Box>
                            </div>                          
                            <Box sx={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginTop:'10px', maxHeight: '50px'}}>
                                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',}}>
                                        <img
                                            src= {item.avatar}
                                            style={{borderRadius:'50%',
                                            width:'2rem',
                                            height:'2rem',
                                            }}/>
                                        <Typography 
                                            sx={{
                                                fontFamily: 'Roboto',
                                                fontSize: '.8em',
                                                fontWeight: 500,
                                                color: '#515255',
                                                lineHeight: '16px',
                                                letterSpacing: '0.15px',
                                                marginLeft:'1em',
                                            
                                        }}>{item.name}</Typography>
                                </Box>
                                <Box sx={{
                                }}>
                                   {item.tags.map((tag, tagIndex) => (
                                        <Chip key={tagIndex} label={tag}  sx={{ '& .MuiChip-label': {
                                            padding:"8px",
                                        },}}/>
                                    ))}                               
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