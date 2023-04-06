import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../../postbyid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {
    Box,
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Button,
    TextField,
} from '@mui/material';
import ModelComment from '../Posts/ModelComment';
import ModelPost from '../Posts/ModelPost';
import DeleteWormingModal from '../Posts/DeleteWarningModal';

export default function PostByID() {

    const { user, isAuthenticated } = useAuth0();
    const [id, setId] = useState('');

    const [show, setshow] = useState(false);

    const handleWarninOpen = () => {
        setshow(true);
    };

    const handleWarninClose = () => {
        setshow(false);
    };

    const addUsers = async () => {
        const datafromAuth = {
            userFullName: user.name,
            email: user.email
        }
        const axiosData = await axios.post(`${process.env.REACT_APP_Backend_Deploy_link}addUsers`, datafromAuth);
        const data = axiosData.data;
        setId(data[0].userid)
    }

    const ParamsObj = useParams();
    const postId = ParamsObj.id;
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [CommentSelected, setCommentSelected] = useState([]);
    const [showCommentFlag, setshowCommentFlag] = useState(false);
    const [showPostFlag, setshowPostFlag] = useState(false);
    const getPost = async () => {
        const axiosData = await axios.get(`${process.env.REACT_APP_Backend_Deploy_link}getPostById/${postId}`);
        const data = axiosData.data;
        setPost(data[0]);
    }

    const getComments = async () => {
        const axiosData = await axios.get(`${process.env.REACT_APP_Backend_Deploy_link}getAllComment/${postId}`);
        const data = axiosData.data;
        setComments(data);
    }

    useEffect(() => {
        getPost();
        getComments();
        addUsers();
    }, []);

    const handleAddComment = async () => {
        if (newComment !== '') {
            await axios.post(`${process.env.REACT_APP_Backend_Deploy_link}saveComment`, {
                postId: postId,
                userId: id,
                Content: newComment,
            });
            getComments();
            setNewComment("");
        }
    };


    const handleDeleteComment = async (commentId) => {
        await axios.delete(`${process.env.REACT_APP_Backend_Deploy_link}deleteComment/${commentId}`);
        setComments(comments.filter((comment) => comment.commentid !== commentId));
    };

    const handleEditComment = async (commentId, newContent) => {
        await axios.put(`${process.env.REACT_APP_Backend_Deploy_link}updateComment/${commentId}`, {
            Content: newContent
        });
        getComments();

    };

    const handleDeletePost = async () => {
        await axios.delete(`${process.env.REACT_APP_Backend_Deploy_link}deletepost/${postId}`);
        window.location.href = "/"; // redirect to home page after deleting the post
        handleWarninClose();
    };

    const handleEditPost = async (data) => {
        const obj = data;
        if (obj.title === '') {
            obj.title = post.title;
        }
        if (obj.imageURL === '') {
            obj.imageURL = post.imageurl;
        }
        if (obj.content === '') {
            obj.content = post.content;
        }
        try {
            await axios.put(`${process.env.REACT_APP_Backend_Deploy_link}updatepost/${postId}`, {
                "title": obj.title,
                "content": obj.content,
                "imageURL": obj.imageURL
            });
            getPost();
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const handlePostShow = () => {

        setshowPostFlag(true);

    }
    const handlePostClose = () => {
        setshowPostFlag(false);

    }
    const handleCommentShow = () => {

        setshowCommentFlag(true);

    }
    const handleCeommentClose = () => {
        setshowCommentFlag(false);

    }

    const handleCeommentSelected = (comment) => {
        setCommentSelected(comment);
        handleCommentShow();
    }



    return (
        <main className='postbyidcontainer'>
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        {post && (
                            <Card sx={{ mb: 2 }}>
                                <div className='displayflex'>
                                    <div className='divimageinpostbyid'>
                                        <img className='imageinpostbyid'
                                            sx={{ height: 0, paddingTop: '56.25%' }}
                                            src={post.imageurl}
                                            title={post.title}
                                        />
                                        {id && (
                                            <div className='commentsection'>
                                                <Typography variant="h6" gutterBottom>
                                                    Add Comment
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    label="Comment"
                                                    multiline
                                                    rows={4}
                                                    value={newComment}
                                                    onChange={(e) => setNewComment(e.target.value)}
                                                    sx={{ mb: 2 }}
                                                />
                                                <Button variant="contained" onClick={handleAddComment}>
                                                    Add Comment
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                    <div className='divcontentinpostinid'>
                                        <div className='headerofpostbyid'>
                                            <CardHeader
                                                avatar={<Avatar src={post.userimageurl} />}
                                                title={<h4>{post.title}</h4>}
                                                subheader={`By ${post.userfullname} on ${new Date(post.created_at).toLocaleDateString()}`}
                                            />
                                            <div>
                                                {id === post.userid && (
                                                    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                        <Button
                                                            variant="contained"
                                                            onClick={handlePostShow}
                                                        /*onClick={() => handleEditPost(post.postid)}*/
                                                        >
                                                            <FontAwesomeIcon icon={faPenToSquare} beatFade style={{color: "#ededed",}} />
                                                          
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            color="warning"
                                                            // onClick={() => handleDeletePost(post.postid)}
                                                            onClick={() => handleWarninOpen()}
                                                            handleClickOpen
                                                        >
                                                             <FontAwesomeIcon icon={faTrash} shake style={{color: "#f0f2f5",}} />
                                                        </Button>
                                                    </CardActions>
                                                )}
                                            </div>
                                        </div>
                                        <CardContent>
                                            <Typography variant="body1" color="text.secondary">
                                                {post.content}
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </div>

                            </Card>
                        )}
                        {comments.map((comment) => (
                            <Card key={comment.commentid} sx={{ mb: 2 }}>
                                <div className='displayflex'>
                                    <CardHeader
                                        avatar={<Avatar src={comment.userimageurl} />}
                                        title={comment.userfullname}
                                        subheader={`Commented on ${new Date(comment.created_at).toLocaleDateString()}`}
                                    />
                                    {id === comment.userid && (
                                        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() => handleCeommentSelected(comment)}
                                            >
                                                 <FontAwesomeIcon icon={faPenToSquare} beatFade style={{color: "#ededed",}} />
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color='warning'
                                                onClick={() => handleDeleteComment(comment.commentid)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} shake style={{color: "#f0f2f5",}} />
                                            </Button>
                                        </CardActions>
                                    )}
                                    </div>
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary">
                                        {comment.content}
                                    </Typography>

                                </CardContent>

                            </Card>
                        ))}
                        <ModelComment key={CommentSelected.commentid} comment={CommentSelected} showFlag={showCommentFlag} handleClose={handleCeommentClose} handleEditComment={handleEditComment} />
                        <ModelPost key={postId} post={post} showFlag={showPostFlag} handleClose={handlePostClose} handleEditPost={handleEditPost} />
                        <DeleteWormingModal key={postId} postId={postId} show={show} handleClose={handleWarninClose} handleDeletePost={handleDeletePost} />
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}

