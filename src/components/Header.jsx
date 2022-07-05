import React from 'react'
import "../components/header.css";
import banner from "../assets/livre1.jpg";

export default function Header() {
  return (
    <div className='Header'>
      <div className="HeaderTitles">
        <span className='HeaderTitleSmall'>Les chroniques d'Antiigone</span>
        <span className='HeaderTitleBig'>BLOG</span>
      </div>
      <img className='HeaderImg' src={banner} alt="" />
    </div>
  )
}
