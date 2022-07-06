import React from 'react'
import { Link } from 'react-router-dom';
import "../components/topbar.css";
import wendy from "../assets/wendy2.jpg"

export default function TopBar() {
    const user = false ;
  return (
    <div className="top">
        <div className="TopLeft">
            <i className="TopIcon fa-brands fa-facebook-square"></i>
            <i className="TopIcon fa-brands fa-instagram-square"></i>
            <i className="TopIcon fa-solid fa-book-atlas"></i>
            <i className="TopIcon fa-solid fa-envelope"></i>
        </div>
        <div className="TopCenter">
            <ul className="TopList">
                <li className="TopListItem">
                    <Link to="/">HOME</Link>
                </li>
                <li className="TopListItem">
                <Link to="/">ABOUT</Link>
                </li>
                <li className="TopListItem">
                <Link to="/">CONTACT</Link>
                </li>
                <li className="TopListItem">
                <Link to="/Write">WRITE</Link>
                </li>
                <li className="TopListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="TopRight">
            {user ? ( <img src={wendy} alt="Profil de Wendy Baqué" className='TopImg'/>
) : (
    <ul className='TopList'>
        <li className='TopListItem'><Link to="/Login">Se connecter</Link></li>
        <li className='TopListItem'><Link to="/Register">Créer un compte</Link></li>
    </ul>
)}
            <i className="TopSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
