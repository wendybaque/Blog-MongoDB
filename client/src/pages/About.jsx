import React from 'react'
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

import wendy from "../assets/wendy.png"

import "../pages/about.css"

export default function About() {
  return (
    <div className='About'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>A propos | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="About-left">
      <Fade cascade>
        <p className="About-text">Auteure autodidacte et créative de 4 romans dans des genres différents, elle est aussi une grande lectrice !
        </p>
        <p className="About-text">Ses préférences s'orientent vers des romans contemporains et réalistes, avec une préférence pour les romans feel-good et sur la musique, avec des thématiques fortes et actuelles... tout comme ses propres romans !
        </p>
        <p className="About-text">C'est tout naturellement qu'en 2019, elle commence à écrire des chroniques de ses coups de cœur littéraires sur sa page Facebook, puis sur ce blog. A travers ses avis, elle souhaite aider les auteurs auto-édités et les maisons d'éditions indépendantes à se faire connaître. 
        </p>
        <p className="About-text">Dans ses lectures, elle apprécie particulièrement les émotions transmises au lecteur, des personnages atypiques aux valeurs fortes et des sujets originaux. 
        </p>
        <p className="About-text">Vous êtes auteur et vous pensez que votre roman pourrait lui plaire ? rendez-vous dans la page contact pour lui en parler !
        </p>
        <p className="About-text">Après un bref passage dans le milieu sanitaire et social entant que psychologue et formatrice pour adultes, elle se reconvertit dans la création d'applications et de sites web, comme celui-ci. Son travail est disponible sur son <a href="https://wendybaquedevweb.netlify.app/" alt="portfolio de Wendy Baqué, développeuse web et web mobile">portfolio</a>.</p>
        <p className="About-text">Retrouvez tous ses romans et son parcours littéraire sur <a href="https://site-auteure.vercel.app/" alt="site internet de Wendy Baqué, auteure">son site internet</a></p>
     </Fade>

      </div>

      <div className="About-right">
        <img src={wendy} alt="Wendy Baqué avec ses deux livres"></img>
      </div>

    </div>
  )
}
