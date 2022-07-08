import React from 'react'
import "../components/singlepost.css"
import livre4 from "../assets/livre4.jpg"

export default function SinglePost() {
  return (
    <div className='SinglePost'>
        <div className="SinglePostWrapper">
            <img src={livre4} alt="Livre au bord de la mer" className="SinglePostImg" />
            <h1 className="SinglePostTitle">Chronique : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <div className="SinglePostEdit">
                    <i className="SinglePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="SinglePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="SinglePostInfo">
                <span className='SinglePostAuthor'>Auteur : <b>Wendy Baqué</b></span>
                <span className='SinglePostDate'>1 hour ago</span>
            </div>
            <p className='SinglePostDescr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam rerum! Officiis, quis facilis? Exercitationem velit eius explicabo voluptates, veritatis mollitia hic facilis alias! Facere placeat temporibus perferendis minima natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sapiente voluptatibus, voluptatum vero iure deleniti nulla earum modi itaque cupiditate aperiam nisi, quia a delectus doloremque laudantium velit. Ut, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsa. In cumque expedita eveniet nobis eligendi soluta temporibus culpa minima consequuntur veniam? Ipsum dolore nobis labore qui officiis illum harum.Lorem
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sunt ipsa eum est iure sequi dolor aliquam ducimus veniam ullam alias fugiat, fuga, nulla libero laudantium et velit facere sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam porro deleniti illo ut exercitationem atque adipisci. Vitae natus consequatur aliquam repudiandae harum vel, modi esse nesciunt, earum saepe perspiciatis.
            </p>
        </div>
    </div>
  )
}
