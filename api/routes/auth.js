const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
//ROUTE POST + http://localhost:5000/api/auth/register + modifier le body
router.post("/register", async (req,res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
          });
          const user = await newUser.save();
          res.status(200).json(user);
        } catch(err) {
          res.status(500).json(err);
        }
      });

//LOGIN
//ROUTE POST + http://localhost:5000/api/auth/login + essayer avec un username et un password déjà existants
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Identifiant non reconnu. 🤔");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Mot de passe non reconnu. 🤔");

    // Pour ne pas envoyer le mot de passe hashé à l'utilisateur :
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
