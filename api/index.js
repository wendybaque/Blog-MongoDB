const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// stockage d'un fichier avec multer :
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
    // Si marche pas, changer req.body.name par string random
  },
});

// Upload des fichiers avec multer :
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Fichier chargé avec succès ! 🥳");
});

// ROUTES :
// Route d'authentification :
app.use("/api/auth", authRoute);
// Routes pour les utilisateurs :
app.use("/api/users", userRoute);
// Routes pour les posts :
app.use("/api/posts", postRoute);
// Routes pour les catégories :
app.use("/api/categories", categoryRoute);

//ROUTE DE BASE :
// app.use("/", (req,res) => {
//   console.log("Hey, this is main url");
// });

// LA OU LE SERVEUR TOURNE
app.listen("5000", () => {
  console.log("Backend is running.");
});