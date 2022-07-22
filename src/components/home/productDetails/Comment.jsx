import React, { useEffect } from 'react'
import { Title, SubmitButton } from './productDetails.js';
import { Commenter, Container, Content } from './comment.js';
import { TextField, Grid, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
export default function Comment(props) {

    const { id } = props;
    const [open, setOpen] = React.useState(false);
    const [nameText, setNameText] = React.useState('');
    const [commentText, setCommentText] = React.useState('');
    const [name, setName] = React.useState('');
    const [comment, setComment] = React.useState([]);
    const handleSubmit = async () => {
        if (!name) setNameText('Name is required');
        else setNameText('');
        if (!comment) setCommentText('Comment is required');
        else setCommentText('');
        if (name && comment) {
            const payload = {
                product: id,
                name,
                comment
            };
            console.log(payload)
            const response = await axios.post(`/comment`, payload);
            if (response.status === 201) {
                setName('');
                setComment('');
                setOpen(true);
                comments.push(payload);
            }
        }
    }
    const [searchParams] = useSearchParams();

    const [comments, setComments] = React.useState([]);
    //get commnent from a product id
    useEffect(() => {
        axios.get(`/comment`, {
            params: {
                productId: id,
                page: searchParams.get('page') || 1,

            }
        }).then(res => {
            setComments(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [searchParams, id, comments]);
    const handleClose = () => setOpen(false);
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
                        {comments.map((comment, index) => (
                            <Container key={index}>
                                <Commenter>{comment.name}</Commenter>
                                <Content>{comment.comment}</Content>
                            </Container>
                        ))}
                    </Container>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert severity="success">Comment successfully!</Alert>
            </Snackbar>
        </>
    )
}
