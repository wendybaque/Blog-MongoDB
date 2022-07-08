import React from 'react'
import {Helmet} from "react-helmet";

import "../pages/settings.css";
import SideBar from "../components/SideBar";
import wendy from "../assets/wendy2.jpg"

export default function Settings() {
  return (
    <div className='Settings'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Paramètres | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <div className="SettingsWrapper">
          <div className="SettingsTitle">
            <span className="SettingsUpdateTitle">Modifier ton compte</span>
            <span className="SettingsDeleteTitle">Supprimer ton compte</span>
          </div>
          <form className="SettingsForm">
            <label>Photo de profil</label>
            <div className="SettingsPP">
              <img src={wendy} alt="Profil de Wendy Baqué" />
              <label htmlFor='fileInput'>
                <i className="SettingsPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}></input>
            </div>
            <label>Nom d'utilisateur</label>
            <input type="test" placeholder="Wendy"></input>
            <label>E-mail</label>
            <input type="email" placeholder="wendy@gmail.com"></input>
            <label>Mot de passe</label>
            <input type="password"></input>
            <button className="SettingsSubmit">Se connecter</button>
          </form>
        </div>
        <SideBar />
    </div>
  )
}
