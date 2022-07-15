import React, { useContext } from 'react'
import { useState } from 'react';
import { Helmet } from "react-helmet";
import { Context } from "../context/Context";
import axios from 'axios';

import "../pages/write.css";

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch(err) {}
        }
        try {
            const res = await axios.post("/post", newPost);
            window.location.replace("post" + res.data._id)
        } catch(err) {}
       
    };

  return (
    <div className='Write'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Ecrire une chronique | Blog d'Antiigone</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        {file && (
        <img className="WriteImg" src={URL.createObjectURL(file)} alt="Rangée de livres anciens sur des marches de pierre" />)}
        <form className='WriteForm' onSubmit={handleSubmit}>
            <div className="WriteFormGroup">
                <label htmlFor='fileinput'><i className="WriteIcon fa-solid fa-plus"></i></label>
                <input type="file" id="fileinput" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}></input>
                <input type="text" id="title" placeholder='Titre' className='WriteInput' autoFocus={true}  onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="WriteFormGroup">
                <textarea type="text" placeholder='Ecris ta chronique' className='WriteInput WriteText' onChange={(e) => setDesc(e.target.value)}></textarea>
            </div>
            <button type="submit" className="WriteSubmit">
                Publier
            </button>
        </form>
    </div>
  );
}