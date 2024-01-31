import React, { useState } from 'react';
import { Tooltip, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const editOptions = ['Editar', 'Excluir'];

function Edit() {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenMenu}>
                    <EditIcon sx={{ borderRadius: '50%', background: '#FFCC99', padding: '3px', fontSize: 'medium', color: '#303133', mt:'25px'}} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
            >
                {editOptions.map((option) => (
                    <MenuItem key={option} onClick={handleCloseMenu}>
                            <Typography textAlign="center">{option}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default Edit;
