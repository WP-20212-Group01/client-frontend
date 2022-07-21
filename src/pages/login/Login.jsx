import React from 'react'
import { Container, CssBaseline, Avatar, Typography, TextField, Grid, Box, Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Link } from 'react-router-dom'

export default function Login() {
    const [errorEmail, setErrorEmail] = React.useState('')
    const [errorPassword, setErrorPassword] = React.useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        if (!email.includes('@') || email === '') {
            setErrorEmail('Invalid email');
        }
        else {
            setErrorEmail('');
        }
        if (password.length < 8) {
            setErrorPassword('Password must be at least 8 characters');
        }
        else {
            setErrorPassword('');
        }
        // All condition are met, login the user

    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal" type="email" required fullWidth id="email" label="Email" name="email" autoFocus helperText={errorEmail} />
                    <TextField margin="normal" type="password" required fullWidth id="password" label="Password" name="password" autoFocus helperText={errorPassword} />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3, mb: 2, backgroundColor: 'black', '&:hover': {
                                backgroundColor: '#fff',
                                color: '#000',
                            }
                        }}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/" variant="body2">
                                Back to home page
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register" variant="body2">
                                Don&apos;t have an account? Register
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <div />
        </Container>
    )
}