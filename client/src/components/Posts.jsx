import React from 'react'
import "../components/posts.css";
import Post from "../components/Post"

export default function Posts({posts}) {
  return (
    <div className='Posts'>
        {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  )
}
