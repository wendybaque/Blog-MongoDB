import React from 'react'
import "../components/singlepost.css";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "localhost:5000/image/"


    useEffect(() => {
        const getPost = async() => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
        };
        getPost()
    }, [path]);

  return (
    <div className='SinglePost'>
        <div className="SinglePostWrapper">
            {post.photo && (
            <img src={PF + post.photo} alt="Livre au bord de la mer" className="SinglePostImg" /> )}
            <h1 className="SinglePostTitle">{post.title}
                <div className="SinglePostEdit">
                    <i className="SinglePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="SinglePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="SinglePostInfo">
            <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
                <span className='SinglePostDate'> {new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='SinglePostDescr'>{post.desc}</p>
        </div>
    </div>
  )
}
