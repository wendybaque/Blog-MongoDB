import React from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import '../pages/login.css';

export default function Login() {
  return (
    <div className='Login'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Se connecter | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <span className="LoginTitle">CONNEXION</span>
      <form className="LoginForm">
        <label>E-mail</label>
        <input className="LoginInput" type="email" placeholder='Saisis ton email (ex : michel@gmail.com)'></input>
        <label>Mot de passe</label>
        <input className="LoginInput" type="password" placeholder='Saisis ton mot de passe'></input>
        <button className="LoginButton">Se connecter</button>
      </form>
      <Link to="/Register"><button className="LoginRegisterButton">Créer un compte/S'enregistrer</button></Link>
    </div>
  )
}
