import React from 'react'
import "../components/footer.css";

export default function Footer() {
  return (
    <div className='Footer'>
      <div className="FooterLeft">
      Copyright ©2022
      </div>
      <div className="FooterCenter">
        Made with ❤ by <a href="https://wendybaquedevweb.netlify.app/" alt="Redirection vers le portfolio de Wendy Baqué, développeuse web et web mobile" target="_blank" rel="noreferrer" className='link'>Wendy Baqué</a>
      </div>
      <div className="FooterRight">
        Mentions Légales
      </div>
    </div>
  )
}
