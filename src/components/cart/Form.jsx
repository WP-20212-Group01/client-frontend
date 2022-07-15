import { Grid, TextField } from '@mui/material'
import React from 'react'

export default function Form() {
    return (
        <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12}>
                <TextField required id="name" label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField type="email" id="email" label="Email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField required type="tel" id="phone" label="Phone" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField type="text" id="address" label="Address" variant="outlined" fullWidth multiline minRows={10} />
            </Grid>
        </Grid>
    )
}
