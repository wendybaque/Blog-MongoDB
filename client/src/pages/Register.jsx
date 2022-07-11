import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../pages/register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className='Register'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Créer un compte | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <span className="RegisterTitle">CREER UN COMPTE</span>
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <label>Identifiant</label>
        <input className="RegisterInput" type="text" placeholder="Saisis ton nom d'utilisateur" onChange={(e) => setUsername(e.target.value)}></input>
        <label>E-mail</label>
        <input className="RegisterInput" type="email" placeholder="Saisis ton email (ex : michel@gmail.com)"  onChange={(e) => setEmail(e.target.value)}></input>
        <label>Mot de passe</label>
        <input className="RegisterInput" type="password" placeholder="Saisis ton mot de passe" onChange={(e) => setPassword(e.target.value)}></input>
        <button className="RegisterButton" type="submit">S'enregistrer</button>
      </form>
      <Link to="/Login"><button className="RegisterLoginButton">Se connecter</button></Link>
      {error && <span style={{color:"tomato", marginTop:"10px"}}>Quelque chose n'est pas bon. 😉</span>}
    </div>
  )
}
