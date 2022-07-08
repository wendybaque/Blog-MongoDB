import React from 'react'
import {Helmet} from "react-helmet";

import "../pages/page404.css";

export default function Page404() {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Page not found | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
      Page404
    </div>
  )
}
