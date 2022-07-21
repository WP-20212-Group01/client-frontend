import React from "react";

import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="sticky"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1, fontWeight: 'bold', textShadow: '2px 2px #edebeb' }}>
                        <Link href="/" color="inherit" sx={{ textDecoration: 'none' }}>
                            The candle shop
                        </Link>
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/cart"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Cart
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Navbar;