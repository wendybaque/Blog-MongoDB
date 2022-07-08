import React from 'react'
import {Helmet} from "react-helmet";
import "../pages/about.css"

export default function About() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>A propos | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      About
    </div>
  )
}
