import React from 'react'
import { Grid, TextField } from '@mui/material'
export default function Form() {
    return (
        <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12}>
                <TextField required id="name" label="Name" name="name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField type="email" id="email" label="Email" name="email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField required type="tel" id="phone" label="Phone" name="phone" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField type="text" id="address" label="Address" name="address" variant="outlined" fullWidth multiline minRows={10} />
            </Grid>
        </Grid>
    )
}
