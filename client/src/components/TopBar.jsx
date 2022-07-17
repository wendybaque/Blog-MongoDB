import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from "../context/Context";
import "../components/topbar.css";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };

  return (
    <div className="top">
        <div className="TopLeft">
        <a href="https://www.facebook.com/AntiigoneWB" alt="redirection vers Facebook" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-brands fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/wendybqe/" alt="redirection vers Instagram" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-brands fa-instagram-square"></i></a>
            <a href="https://site-auteure.vercel.app/" alt="redirection vers le site internet de Wendy Baqué" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-solid fa-book-atlas"></i></a>
            <a href="/Contact" alt="redirection vers la page contact" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-solid fa-envelope"></i></a>
        </div>
        <div className="TopCenter">
            <ul className="TopList">
                <li className="TopListItem">
                    <Link to="/" className='link'>ACCUEIL</Link>
                </li>
                <li className="TopListItem">
                    <Link to="/About" className='link'>A PROPOS</Link>
                </li>
                <li className="TopListItem">
                    <Link to="/Contact" className='link'>CONTACT</Link>
                </li>
                <li className="TopListItem">
                    <Link to="/Write" className='link'>ECRIRE</Link>
                </li>
                <li className="TopListItem" onClick={handleLogout}>
                    {user && "DECONNEXION"}
                </li>
            </ul>
        </div>
        <div className="TopRight">
        {user ? (
            <Link to="/settings">
                <img src={PF + user.profilePic} alt="Profil de l'utilisateur" className='TopImg'/>
            </Link> ) : (
    <ul className='TopList'>
        <li className='TopListItem'><Link to="/Login" className='link'>Se connecter</Link></li>
        <li className='TopListItem'><Link to="/Register" className='link'>Créer un compte</Link></li>
    </ul>
        )}
            {/* <i className="TopSearchIcon fa-solid fa-magnifying-glass"></i> */}
        </div>
    </div>
  )
}
