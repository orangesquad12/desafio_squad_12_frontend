import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function StateTextFields() {
  const [name, setName] = React.useState('Cat in the Hat');

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '250.5px',mb:'16px'},
        "@media (max-width: 592px)": { 
          '& > :not(style)': {
            width: '312px',
            margin: 'auto',
            mb:"16px"

          }
      }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Nome*"
        defaultValue=""
        onChange={(event) => {
          setName(event.target.value);
        }}
        sx={{ "@media (max-width: 592px)": { 
          display:"flex",
      }}}
     
      />
      <TextField
        id="outlined-uncontrolled"
        label="Sobrenome*"
        defaultValue=""
        sx={{ "@media (max-width: 592px)": { 
          display:"flex"
      }}}
      />
    </Box>
  );
}