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
        "template_rl2rmjf",
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
      <div className="lg:flex lg:flex-row md:flex-col sm:flex-col bg-slate-100 overflow-hidden">
        
        <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

          <div className="Contact">
              <div className="Contact-wrapper">
                  <p> Vous souhaitez commander l'un de mes romans au format broché avec une dédicace personnalisée ? Ou vous avez tout simplement une question sur mes livres ?</p>
                  <p className="text-blue-700 font-poppins">Rendez-vous dans le formulaire ci-dessous.</p>
                  <form ref={formRef} onSubmit={handleSubmit} className="Contact-form">
                      <label><input type="text" placeholder="Votre nom" name="user_name" required aria-required="true" className=""/></label>
                      <label><input type="mail" placeholder="Votre e-mail" name="user_email" required aria-required="true" className=""/></label>
                      <label><input type="tel" placeholder="Votre numéro de téléphone" name="user_phone" required aria-required="true" className=""/></label>
                      <label><input type="text" placeholder="Sujet de votre message" name="user_subject" required aria-required="true" className=""/></label>
                      <label><textarea rows="10" placeholder="Votre message" name="message" required aria-required="true" className=""/></label>
                      <button type="submit" className="">Envoyer !</button>
                      {done && "Merci pour votre message. Je vous répondrai au plus vite"}
                  </form>
              </div>
          </div>
      </div>
  );
}

export default Contact;