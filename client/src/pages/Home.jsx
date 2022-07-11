import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
// import { useLocation } from "react-router";

import "../pages/home.css";
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Posts from '../components/Posts';

import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data)
    }
  fetchPosts()
  }, []);

  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Accueil | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
    <div className='Home'>
      <Posts posts={posts}/>
      <SideBar />
    </div>
    </div>
  )
}
