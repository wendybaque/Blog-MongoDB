import React from 'react'
import { useState, useRef } from 'react';
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

import "../pages/contact.css";

function Contact () {

  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_u2fklzg",
        "template_g6zbpjq",
        formRef.current,
        "DUffDPlWcTNQB2sPj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
      <div className='Contact'>
        
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

              <div className="Contact-wrapper">
                  <p> Vous êtes auteur.e et vous pensez que vous livre peut m'intéresser ? Vous souhaitez me le proposer pour une chronique ?</p>
                  <p> Une petite description, un résumé et quelques mots pour me donner envie de le lire seront appréciés. 😉</p>
                  <p> Ou vous avez tout simplement une question sur mes livres ou mes chroniques ?</p>
                  <p> <span className='Contact-span'> Rendez-vous dans le formulaire ci-dessous.</span></p>
                  <form ref={formRef} onSubmit={handleSubmit} className="Contact-form">
                      <label>Nom</label>
                      <input type="text" placeholder="Votre nom" name="user_name" required aria-required="true" className="Contact-input"/>
                      <label>E-mail</label>
                      <input type="mail" placeholder="Votre e-mail" name="user_email" required aria-required="true" className="Contact-input"/>
                      <label>Téléphone</label>
                      <input type="tel" placeholder="Votre numéro de téléphone" name="user_phone" className="Contact-input"/>
                      <label>Sujet</label>
                      <input type="text" placeholder="Sujet de votre message" name="user_subject" required aria-required="true" className="Contact-input"/>
                      <label>Message</label>
                      <textarea rows="10" placeholder="Votre message" name="message" required aria-required="true" className="Contact-textarea"/>
                      <button type="submit" className="Contact-submit-button">Envoyer !</button>
                      {done && "Merci pour votre message. Je vous répondrai au plus vite 😊"}
                  </form>
              </div>
          </div>
  );
}

export default Contact;