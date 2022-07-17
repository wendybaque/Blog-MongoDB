const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// CREATE un post
// ROUTE POST + http://localhost:5000/api/posts/ + ajouter les champs dans le body
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch(err) {
    res.status(500).json(err);
  }
});

// UPDATE un post
// ROUTE PUT + http://localhost:5000/api/posts/:id + modifier qqch dans le body
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch(err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Tu ne peux modifier que tes propres posts ! 😱");
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

// DELETE un post
// ROUTE DELETE + http://localhost:5000/api/posts/:id
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post supprimé avec succès ! 🥳");
      } catch(err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Tu ne peux supprimer que tes propres posts ! 😱");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET un seul post
// GET : http://localhost:5000/api/posts/:id
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch(err) {
    res.status(500).json(err);
  }
});

// GET tous les posts
// GET : http://localhost:5000/api/posts/
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;