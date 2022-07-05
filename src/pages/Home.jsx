import React from 'react'
import TopBar from '../components/TopBar';
import Header from '../components/Header';

import "../pages/home.css";

export default function Home() {
  return (
    <div className='Home'>
      <TopBar />
      <Header />
    </div>
  )
}
