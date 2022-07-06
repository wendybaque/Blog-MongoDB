import React from 'react'
import "../components/sidebar.css";
import wendy from "../assets/wendy2.jpg"

export default function SideBar() {
  return (
    <div className='Sidebar'>
      <div className="SideBarItem">
        <span className='SideBarTitle'>ABOUT ME</span>
        <img src={wendy} alt="A propos de Wendy Baqué" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat esse non impedit reprehenderit, ullam fuga vitae ipsum beatae explicabo suscipit hic quas accusantium error libero dolorem omnis odio? Vero, iusto?</p>
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
            <i className="SideBarIcon fa-brands fa-facebook-square"></i>
            <i className="SideBarIcon fa-brands fa-instagram-square"></i>
            <i className="SideBarIcon fa-solid fa-book-atlas"></i>
            <i className="SideBarIcon fa-solid fa-envelope"></i>
        </div>
      </div>
    </div>
  )
}
