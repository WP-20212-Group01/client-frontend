import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
import { useNavigate } from "react-router-dom"
import React from 'react'

export default function AdminNavbar() {
    let navigate = useNavigate();
    const toProducts = () => {
        navigate('/admin/products');
    }
    const toOrders = () => {
        navigate('/admin/orders');
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 0.1, fontWeight: 'bold', textShadow: '2px 2px #edebeb' }}>
                        Dashboard
                    </Typography>
                    <Button color="inherit" onClick={toProducts}>Products</Button>
                    <Button color="inherit" onClick={toOrders}>Orders</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
