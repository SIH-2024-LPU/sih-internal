// const express = require('express');
// const router = express.Router();
// const Post = require('../models/Post'); // You'll need to create this model
// const { verifyToken } = require('../middleware/auth');


const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { verifyToken } = require('../middleware/auth');

// // Create a new post
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

// module.exports = router;



router.post('/', verifyToken, async (req, res) => {
  try {
    const newPost = new Post({
      content: req.body.content,
      author: req.user._id,
    });
    await newPost.save();
    const populatedPost = await Post.findById(newPost._id).populate('author', 'name imageUrl');
    res.status(201).json(populatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('author', 'name imageUrl')
      .populate('comments.author', 'name imageUrl');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/:id/like', verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const userLikedIndex = post.likes.indexOf(req.user._id);
    if (userLikedIndex > -1) {
      post.likes.splice(userLikedIndex, 1);
    } else {
      post.likes.push(req.user._id);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/:id/comments', verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const newComment = {
      content: req.body.content,
      author: req.user._id,
    };

    post.comments.push(newComment);
    await post.save();

    const updatedPost = await Post.findById(req.params.id)
      .populate('author', 'name imageUrl')
      .populate('comments.author', 'name imageUrl');

    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;