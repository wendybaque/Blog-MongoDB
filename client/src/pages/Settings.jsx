import "./settings.css";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Helmet } from "react-helmet"
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="Settings">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Paramètres du compte | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <div className="SettingsWrapper">
        <div className="SettingsTitle">
          <span className="SettingsUpdateTitle">Modifier ton compte</span>
          <span className="SettingsDeleteTitle">Supprimer ton compte</span>
        </div>
        <form className="SettingsForm" onSubmit={handleSubmit}>
          <label>Photo de profil</label>
          <div className="SettingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt="Profil de l'utilisateur"
            />
            <label htmlFor="fileInput">
              <i className="SettingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Identifiant</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>E-mail</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Mot de passe</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="SettingsSubmit" type="submit">
            Modifier
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Ton profil a été modifié avec succès !
            </span>
          )}
        </form>
      </div>
    </div>
  );
}