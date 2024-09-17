const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // You'll need to create this model
const { verifyToken } = require('../middleware/auth');

// Create a new post
router.post('/posts', verifyToken, async (req, res) => {
  try {
    const newPost = new Post({
      content: req.body.content,
      author: req.user._id
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all posts
router.get('/posts', verifyToken, async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('author', 'name imageUrl')
      .exec();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Toggle like on a post
router.post('/posts/:id/like', verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const userLikedIndex = post.likes.indexOf(req.user._id);
    if (userLikedIndex > -1) {
      // User has already liked, so unlike
      post.likes.splice(userLikedIndex, 1);
    } else {
      // User hasn't liked, so add like
      post.likes.push(req.user._id);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;