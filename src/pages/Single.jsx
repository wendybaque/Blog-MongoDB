import React from 'react'
import SideBar from '../components/SideBar';
import SinglePost from '../components/SinglePost';
import "../pages/single.css";

export default function Single() {
  return (
    <div className='Single'>
        <SinglePost />
        <SideBar />
    </div>
  )
}
