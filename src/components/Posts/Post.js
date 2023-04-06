import React, { useEffect, useState } from 'react'
import axios from 'axios';


import PostContent from './PostContent';


export default function Post(props) {

    const [allPostsData, setAllPostsData] = useState([]);

    const getAllPosts = async () => {
        const postsData = await axios.get(`${process.env.REACT_APP_Backend_Deploy_link}getAllPosts`)
        const data = postsData.data;
        setAllPostsData(data);
    }

    useEffect(() => {
        getAllPosts();
    }, [allPostsData])

    return (
        <>
            {allPostsData.map((Post) => {
                return (
                    <PostContent key={Post.postid.toString()} data={Post} userid={props.id} />
                )
            })}
        </>
    );
}