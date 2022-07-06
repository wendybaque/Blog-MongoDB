import React from 'react'
import Header from '../components/Header';

import "../pages/home.css";
import SideBar from '../components/SideBar';
import Posts from '../components/Posts';

export default function Home() {
  return (
    <div>
      <Header />
    <div className='Home'>
      <Posts />
      <SideBar />
    </div>
    </div>
  )
}
