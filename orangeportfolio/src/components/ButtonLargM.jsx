import * as React from 'react';
import { Button} from "@mui/material"

function ButtonLargerM({children}){
    return(
        <Button 
        sx={{width: "517px", 
        height: "42px", 
        background: "linear-gradient(135deg, #F83 0%, #F52 73.9%)",
        m:1,
        "@media (max-width: 592px)": { 
            width:"312px",
            margin:"auto"

        },}}
        variant="contained" 
        size="large">
            {children}
        </Button>
    )
}
export default ButtonLargerM