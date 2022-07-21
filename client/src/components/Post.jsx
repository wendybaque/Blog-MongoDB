import React from 'react'
import "../components/post.css";
import { Link } from "react-router-dom";

export default function Post({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className='Post'>
        {post.photo && <img src={PF + post.photo} alt="Bannière de post" className='PostImg'/> }
        <div className="PostInfo">
          <div className="PostCategories">
            {post.categories.map(cat =>
              <span className="PostCat">{cat.name}</span>
              )}
          </div>
          <Link to={`/post/${post._id}`} className="link"><span className="PostTitle">{post.title}</span></Link>
            <hr/>
            <span className="PostDate">{new Date(post.createdAt).toDateString}</span>
        </div>
        <p className='PostDescr'>{post.desc}</p>
    </div>
  )
}
