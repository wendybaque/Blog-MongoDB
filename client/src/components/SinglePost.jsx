import React, { useContext } from 'react'
import "../components/singlepost.css";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../context/Context";

import axios from 'axios';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "localhost:5000/images/";
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(() => {
      const getPost = async () => {
        const res = await axios.get("/posts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      };
      getPost();
    }, [path]);
  
    const handleDelete = async () => {
      try {
        await axios.delete(`/posts/${post._id}`, {
          data: { username: user.username },
        });
        window.location.replace("/");
      } catch (err) {}
    };
  
    const handleUpdate = async () => {
      try {
        await axios.put(`/posts/${post._id}`, {
          username: user.username,
          title,
          desc,
        });
        setUpdateMode(false)
      } catch (err) {}
    };

  return (
    <div className="SinglePost">
      <div className="SinglePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="Bannière du post" className="SinglePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="SinglePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="SinglePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="SinglePostEdit">
                <i
                  className="SinglePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="SinglePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="SinglePostInfo">
          <span className="SinglePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="SinglePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="SinglePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="SinglePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="SinglePostButton" onClick={handleUpdate}>
            Modifier
          </button>
        )}
      </div>
    </div>
  );
}