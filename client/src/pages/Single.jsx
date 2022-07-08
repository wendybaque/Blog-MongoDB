import React from 'react'
import {Helmet} from "react-helmet";

import SideBar from '../components/SideBar';
import SinglePost from '../components/SinglePost';
import "../pages/single.css";

export default function Single() {
  return (
    <div className='Single'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Chronique | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <SinglePost />
        <SideBar />
    </div>
  )
}
