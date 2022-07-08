import React from 'react'
import {Helmet} from "react-helmet";

import "../pages/home.css";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Posts from '../components/Posts';

export default function Home() {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Accueil | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
    <div className='Home'>
      <Posts />
      <SideBar />
    </div>
    </div>
  )
}
