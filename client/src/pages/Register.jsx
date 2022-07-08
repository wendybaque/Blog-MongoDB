import React from 'react'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import '../pages/register.css';

export default function Register() {
  return (
    <div className='Register'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Créer un compte | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <span className="RegisterTitle">CREER UN COMPTE</span>
      <form className="RegisterForm">
        <label>Identifiant</label>
        <input className="RegisterInput" type="email" placeholder="Saisis ton nom d'utilisateur"></input>
        <label>E-mail</label>
        <input className="RegisterInput" type="email" placeholder="Saisis ton email (ex : michel@gmail.com)"></input>
        <label>Mot de passe</label>
        <input className="RegisterInput" type="password" placeholder="Saisis ton mot de passe"></input>
        <button className="RegisterButton">S'enregistrer</button>
      </form>
      <Link to="/Login"><button className="RegisterLoginButton">Se connecter</button></Link>
    </div>
  )
}
