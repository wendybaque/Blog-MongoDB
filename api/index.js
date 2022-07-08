const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users.js");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  // Route d'autentification :
  app.use("/api/auth", authRoute);
  // Route pour les utilisateurs :
  app.use("/api/users", userRoute);

  // URL de base :
// app.use("/", (req, res ) => {
//     console.log("Hey this is main url")
// })

app.listen("5000", () => {
    console.log("Backend is running");
});