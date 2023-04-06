import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PostContent from './PostContent';

export default function UserPost(props) {
    const [allPostsData, setAllPostsData] = useState([]);
    const Userid = props.id;

    const getAllPosts = async () => {
        const postsData = await axios.get(`${process.env.REACT_APP_Backend_Deploy_link}getAllPosts`)
        const data = postsData.data;
        const filteredPosts = data.filter(post => post.userid === Userid);
        setAllPostsData(filteredPosts);
    }

    useEffect(() => {
        getAllPosts();
    }, [allPostsData])

    return (
        <>
            {allPostsData.map((Post) => {
                return (
                    <PostContent key={Post.postid.toString()} data={Post} />
                )
            })}
        </>
    );
}