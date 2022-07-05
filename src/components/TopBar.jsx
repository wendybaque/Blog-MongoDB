import React from 'react'
import "../components/topbar.css";
import wendy from "../assets/wendy2.jpg"

export default function TopBar() {
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
                <li className="TopListItem">HOME</li>
                <li className="TopListItem">ABOUT</li>
                <li className="TopListItem">CONTACT</li>
                <li className="TopListItem">WRITE</li>
                <li className="TopListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="TopRight">
            <img src={wendy} alt="Profil de Wendy Baqué" className='TopImg'/>
            <i className="TopSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
