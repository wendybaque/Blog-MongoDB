import React from 'react'
import "../components/post.css";
import livre2 from '../assets/livre2.jpg'

export default function Post() {
  return (
    <div className='Post'>
        <img src={livre2} alt="Bannière de post" className='PostImg'/>
        <div className="PostInfo">
          <div className="PostCategories">
            <span className="PostCat">Roman</span>
            <span className="PostCat">Coup de Coeur</span>
          </div>
            <span className="PostTitle">Chronique : Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            <hr/>
            <span className="PostDate">1 hour ago</span>
        </div>
        <p className='PostDescr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam quae voluptatibus exercitationem atque, dignissimos aspernatur temporibus distinctio qui harum facilis odit, explicabo, dolorum accusamus! Ipsam doloremque temporibus officiis facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam quae voluptatibus exercitationem atque, dignissimos aspernatur temporibus distinctio qui harum facilis odit, explicabo, dolorum accusamus! Ipsam doloremque temporibus officiis facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam quae voluptatibus exercitationem atque, dignissimos aspernatur temporibus distinctio qui harum facilis odit, explicabo, dolorum accusamus! Ipsam doloremque temporibus officiis facilis?</p>
    </div>
  )
}
