import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Context } from "../context/Context";
import { useContext, useRef } from 'react';
import axios from "axios";

import '../pages/login.css';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };


  return (
    <div className='Login'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Se connecter | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <span className="LoginTitle">CONNEXION</span>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <label>Identifiant</label>
        <input className="LoginInput" type="text" placeholder='Saisis ton identifiant' ref={userRef}></input>
        <label>Mot de passe</label>
        <input className="LoginInput" type="password" placeholder='Saisis ton mot de passe' ref={passwordRef}></input>
        <button type="submit" className="LoginButton" disabled={isFetching}>Se connecter</button>
      </form>
      <Link to="/Register"><button className="LoginRegisterButton">Créer un compte/S'enregistrer</button></Link>
    </div>
  );
}