import React from 'react'
import {Helmet} from "react-helmet";

import "../pages/write.css";
import ranglivres from "../assets/ranglivres.webp"

export default function Write() {
  return (
    <div className='Write'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ecrire une chronique | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <img className="WriteImg" src={ranglivres} alt="Rangée de livres anciens sur des marches de pierre" />
        <form className='WriteForm'>
            <div className="WriteFormGroup">
                <label htmlFor='fileinput'><i className="WriteIcon fa-solid fa-plus"></i></label>
                <input type="file" id="fileinput" style={{display:"none"}}></input>
                <input type="text" id="title" placeholder='Titre' className='WriteInput' autoFocus={true}></input>
            </div>
            <div className="WriteFormGroup">
                <textarea type="text" placeholder='Ecris ta chronique' className='WriteInput WriteText'></textarea>
            </div>
            <button className="WriteSubmit">
                Publier
            </button>
        </form>
    </div>
  )
}
