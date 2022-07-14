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
                    <Typography variant="h5" component="div" sx={{ flexGrow: 0.1 }}>
                        Dashboard
                    </Typography>
                    <Button color="inherit" onClick={toProducts}>Products</Button>
                    <Button color="inherit" onClick={toOrders}>Orders</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
