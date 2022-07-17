const router = require("express").Router();
const Category = require("../models/Category");

//CREATE une catégorie :
// ROUTE POST + http://localhost:5000/api/categories
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch(err) {
    res.status(500).json(err);
  }
});

// GET toutes les catégories :
// ROUTE GET + http://localhost:5000/api/categories
router.get("/", async (req, res) => {
    try {
      const cats = await Category.find();
      res.status(200).json(cats);
    } catch(err) {
      res.status(500).json(err);
    }
  });

module.exports = router;