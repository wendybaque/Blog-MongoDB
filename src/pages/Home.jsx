import React from 'react'
import Header from '../components/Header';

import "../pages/home.css";
import SideBar from '../components/SideBar';
import Post from '../components/Post';

export default function Home() {
  return (
    <div>
      <Header />
    <div className='Home'>
      <Post />
      <SideBar />
    </div>
    </div>
  )
}
