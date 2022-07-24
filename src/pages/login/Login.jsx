import React from 'react'
import { Container, CssBaseline, Avatar, Typography, TextField, Grid, Box, Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../axios'
export default function Login() {
    const navigate = useNavigate();
    const [errorUsername, setErrorUsername] = React.useState('')
    const [errorPassword, setErrorPassword] = React.useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username');
        const password = data.get('password');
        if (username === '') {
            setErrorUsername('Username is required');
        }
        else {
            setErrorUsername('');
        }
        if (password.length < 8) {
            setErrorPassword('Password must be at least 8 characters');
        }
        else {
            setErrorPassword('');
        }
        // All condition are met, login the user
        const response = await axios.post('/auth/login', { username, password });
        if (response.status === 201) {
            const token = response.data;
            localStorage.setItem('adminToken', token);
            navigate('/admin/products');
        }
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
                    <TextField margin="normal" type="text" required fullWidth id="username" label="Username" name="username" autoFocus helperText={errorUsername} />
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
                    </Grid>
                </Box>
            </Box>
            <div />
        </Container>
    )
}