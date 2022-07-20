import React from 'react'
import { Title, SubmitButton } from './productDetails.js';
import { TextField, Grid } from '@mui/material';
export default function Comment() {
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <div>
                        <Title>Leave a comment</Title>
                        <TextField name="comment" label="Comment" variant="outlined" multiline rows={4} sx={{ m: 3, width: '50%' }} size="small" />
                    </div>
                    <SubmitButton>Submit</SubmitButton>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Title>Comments</Title>

                    </div>
                </Grid>
            </Grid>

        </>
    )
}
