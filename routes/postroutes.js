const app = require('express').Router()
const { getPost, updatePost, deleteManyPosts, deletePost, createPost } = require('../controllers/postroute.controller')


// Create post 
app.post('/',createPost)

// Read post
app.get('/',getPost)

// Update post
app.put('/:id', updatePost)

// Delete plusieurs Posts
app.delete('/',deleteManyPosts)

// Delete 1 Post
app.delete('/:id', deletePost)


module.exports = app;