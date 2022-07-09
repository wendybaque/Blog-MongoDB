import React from 'react'
import "../components/post.css";
import {Link} from "react-router-dom";

export default function Post({post}) {

  return (
    <div className='Post'>
        {post.photo && <img src={post.photo} alt="Bannière de post" className='PostImg'/> }
        <div className="PostInfo">
          <div className="PostCategories">
            {post.categories.map(c=>
              <span className="PostCat">{c.name}</span>
              )}
          </div>
          <Link to={`/post/${post._id}`}><span className="PostTitle">{post.title}</span></Link>
            <hr/>
            <span className="PostDate">{new Date(post.createdAt).toDateString}</span>
        </div>
        <p className='PostDescr'>{post.desc}</p>
    </div>
  )
}
