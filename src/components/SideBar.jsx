import React from 'react'
import "../components/sidebar.css";
import wendy from "../assets/wendy2.jpg"

export default function SideBar() {
  return (
    <div className='Sidebar'>
      <div className="SideBarItem">
        <span className='SideBarTitle'>ABOUT ME</span>
        <img src={wendy} alt="A propos de Wendy Baqué" className='SideBarImg'/>
        <p>Connue sous le pseudo d'Antiigone, Wendy Baqué est une auteure qui adore jouer avec les mots.</p>
​       <p>Auteure autodidacte et créative de 4 romans dans des genres différents, elle est aussi une grande lectrice ! 
<p>Ses préférences s'orientent vers des romans contemporains et réalistes, avec une préférence pour les romans feel-good et sur la musique, avec des thématiques fortes et actuelles... tout comme ses propres romans !</p>
<p>C'est tout naturellement qu'en 2019, elle commence à écrire des chroniques de ses coups de cœur littéraires sur sa page Facebook, puis sur ce blog. A travers ses avis, elle souhaite aider les auteurs auto-édités et les maisons d'éditions indépendantes à se faire connaître. </p>
<p>Dans ses lectures, elle apprécie particulièrement les émotions transmises au lecteur, des personnages atypiques aux valeurs fortes et des sujets originaux. </p>
<p>Vous êtes auteur et vous pensez que votre roman pourrait lui plaire ? rendez-vous sur la page "contact" pour lui en parler ! </p>
</p>
      </div>
      <div className="SideBarItem">
      <span className='SideBarTitle'>CATEGORIES</span>
        <ul className="SideBarList">
          <li className="SideBarListItem">Roman</li>
          <li className="SideBarListItem">Coup de Coeur</li>
          <li className="SideBarListItem">Masse Critique</li>
          <li className="SideBarListItem">Plumes de Mimi éditions</li>
          <li className="SideBarListItem">Romance</li>
          <li className="SideBarListItem">Feel-Good</li>
          <li className="SideBarListItem">Autres</li>
        </ul>
      </div>
      <div className="SideBarItem">
        <span className='SideBarTitle'>FOLLOW ME</span>
        <div className="SideBarSocial">
            <a href="https://www.facebook.com/AntiigoneWB" alt="redirection vers Facebook" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-brands fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/wendybqe/" alt="redirection vers Instagram" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-brands fa-instagram-square"></i></a>
            <a href="https://site-auteure.vercel.app/" alt="redirection vers le site internet de Wendy Baqué" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-solid fa-book-atlas"></i></a>
            <a href="/Contact" alt="redirection vers la page contact" target="_blank" rel="noreferrer"><i className="SideBarIcon fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </div>
  )
}
