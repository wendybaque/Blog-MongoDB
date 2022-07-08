const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  // Stockage des fichiers avec Multer :
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  // Upload des fichiers avec multer :
  const upload = multer({ storage: storage });
    app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("Ton image a bien été sauvegardée.");
  });

  // Route d'autentification :
  app.use("/api/auth", authRoute);
  // Route pour les utilisateurs :
  app.use("/api/users", userRoute);
  // Route pour les posts : 
  app.use("/api/posts", postRoute);
  // Route pour les catégories :
  app.use("/api/categories", categoryRoute);

  // URL de base :
// app.use("/", (req, res ) => {
//     console.log("Hey this is main url")
// })

app.listen("5000", () => {
    console.log("Backend is running");
});