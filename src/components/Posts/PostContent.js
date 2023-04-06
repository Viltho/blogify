import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './Profile.css';

export default function PostContent(props) {

    const Post = props.data;
    const [likes, setLikes] = useState(Post.numberoflikes); // initial number of likes from post data
    const [liked, setLiked] = useState(false); // initial liked state is false

    const handleLike = () => {
        if (!liked) {
            axios.post(`${process.env.REACT_APP_Backend_Deploy_link}increasepostlikes/${Post.postid}`)
                .then(() => {
                    setLikes(likes + 1);
                    setLiked(true);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            axios.post(`${process.env.REACT_APP_Backend_Deploy_link}decreespostlikes/${Post.postid}`)
                .then(() => {
                    setLikes(likes - 1);
                    setLiked(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };


    return (
        <>
            <Card key={Post.postid} className='my-2'>
                <div className='displayflex'>
                    <CardContent className='postimagecontainer'>
                        <img
                            className='postimage'
                            src={Post.imageurl}
                            title="Post Image"
                            alt=''
                        />
                    </CardContent>
                    <CardContent className='postinfo'>
                        <div className='section1post'>
                            <div className='titleinpostinhome'>
                                <Typography gutterBottom variant="h5" className='postitle' component="div">
                                    {Post.title}
                                </Typography>
                            </div>
                            <div className='displayflex profileinpostinhome'>
                                <p>
                                    By {Post.userfullname}
                                </p>
                                <img className='mx-2 profileimage' src={Post.userimageurl} />
                            </div>
                        </div>
                        <CardContent className='mx-2'>
                            <Typography variant="h6" component="div" color="text.secondary">
                                {Post.content.length > 200 ? `${Post.content.substring(0, 300)}...` : Post.content}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button onClick={handleLike} disabled={props.userid===''} >{liked ? <ThumbUpIcon className='mx-2 likebold' /> : <ThumbUpIcon className='mx-2' />}{likes}</Button>
                            <Button href={`/postinfo/${Post.postid}`} >Read More</Button>
                        </CardActions>
                    </CardContent>
                </div>
            </Card>
        </>
    );
}