import React from 'react'
import '../pages/login.css';

export default function Login() {
  return (
    <div className='Login'>
        <span className="LoginTitle">CONNEXION</span>
      <form className="LoginForm">
        <label>E-mail</label>
        <input className="LoginInput" type="email" placeholder='Saisis ton email (ex : michel@gmail.com)'></input>
        <label>Mot de passe</label>
        <input className="LoginInput" type="password" placeholder='Saisis ton mot de passe'></input>
        <button className="LoginButton">Se connecter</button>
      </form>
      <button className="LoginRegisterButton">Créer un compte/S'enregistrer</button>
    </div>
  )
}
