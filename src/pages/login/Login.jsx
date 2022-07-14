import React from 'react'
import { Container, CssBaseline, Avatar, Typography, TextField, Grid, Box, FormControlLabel, Button, Checkbox } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    const [errorText, setErrorText] = React.useState('')
    const handleSubmit = async (event) => {
        /* TODO */
    }
    return (
        <div style={{ backgroundImage: `url(assets/background.jpg)` }} >
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
                        <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoFocus helperText={errorText} />
                        <TextField margin="normal" type="password" required fullWidth id="password" label="Password" name="password" autoFocus />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgetpwd" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup" variant="body2">
                                    Don&apos;t have an account? Register
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <div />
            </Container>
        </div>
    )
}
