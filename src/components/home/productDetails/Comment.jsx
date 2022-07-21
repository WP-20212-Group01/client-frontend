import React from 'react'
import { Title, SubmitButton } from './productDetails.js';
import { Commenter, Container, Content } from './comment.js';
import { TextField, Grid } from '@mui/material';
export default function Comment() {
    const [nameText, setNameText] = React.useState('');
    const [commentText, setCommentText] = React.useState('');
    const [name, setName] = React.useState('');
    const [comment, setComment] = React.useState('');
    const handleSubmit = () => {
        if (!name) setNameText('Name is required');
        else setNameText('');
        if (!comment) setCommentText('Comment is required');
        else setCommentText('');

    }
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <Container>
                        <Title>Leave a comment</Title>
                        <TextField name="name" label="Name" variant="outlined" required sx={{ mt: 3, mb: 3, width: '50%' }} size="small" helperText={nameText} onChange={(e) => {
                            setName(e.target.value);
                        }} value={name} />
                        <TextField name="comment" label="Comment" variant="outlined" multiline rows={4} sx={{ mt: 3, mb: 3, width: '50%' }} size="small" required helperText={commentText} onChange={(e) => {
                            setComment(e.target.value);
                        }} value={comment} />
                        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <Container>
                        <Title>Comments</Title>
                        <Commenter>Nguyen Dang Ninh</Commenter>
                        <Content>"This is the best candle in the world"</Content>
                        <Commenter>dum</Commenter>
                        <Content>"10/10 would buy again lol"</Content>
                    </Container>
                </Grid>
            </Grid>

        </>
    )
}
