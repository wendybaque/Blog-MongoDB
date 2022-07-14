import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


import "../pages/page404.css";

export default function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, );
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Page not found | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
      <section className="page_404">
        <div className="container">
          <div className="bg">
            <h1 className="text-center ">404</h1>
          </div>
    
          <div className="contant_box_404">
            <h3 className="h2">Oups, tu t'es perdu.e ?</h3>
            <p>Il n'y a pas encore de livres ici.</p>
            <p>Ne t'en fais pas, tu vas être automatiquement redirigé à l'accueil.</p>
          </div>
      </div>
    </section>


  </div>
  )
}
