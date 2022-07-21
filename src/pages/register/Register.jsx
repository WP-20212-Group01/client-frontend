import React from 'react'
import { Container, CssBaseline, Avatar, Typography, TextField, Box, Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Link } from 'react-router-dom';
export default function Register() {
    /* eslint-disable */
    const [errorMail, setErrorMail] = React.useState('')

    const [errorPhone, setErrorPhone] = React.useState('')
    const [errorPassword, setErrorPassword] = React.useState('')
    const handleSubmit = async (event) => {
        /* TODO */
    }
    return (
        <Container component="main" maxWidth="xs" >
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
                    <AppRegistrationIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registration
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal" required fullWidth id="name" label="Name" name="name" autoFocus />
                    <TextField margin="normal" required fullWidth id="phone" label="Phone number" name="phone" helperText={errorPhone} />
                    <TextField margin="normal" type="email" required fullWidth id="email" label="Email" name="email" helperText={errorMail} />
                    <TextField margin="normal" type="password" required fullWidth id="password" label="Password" name="password" helperText={errorPassword} />
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
                        Submit
                    </Button>
                    <Link to="/" variant="body2">Back to home page</Link>
                </Box>
            </Box>
            <div />
        </Container>
    )
}
