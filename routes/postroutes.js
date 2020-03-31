const app = require('express').Router()
const { getPost,filteredPosts, updatePost, deleteManyPosts, deletePost, createPost, postSearch } = require('../controllers/postroute.controller')



app.get('/search', postSearch)



// Read post
app.get('/',getPost)



app.get('/type/:type',filteredPosts )




app.get('/editPost/:id', updatePost)

// Create post 
app.post('/',createPost)

// Delete 1 Post
app.delete('/:id', deletePost)


// Update post
app.post('/:id', updatePost)


// Delete plusieurs Posts
app.delete('/',deleteManyPosts)


// view add
app.get('/add', (req,res)=>{
    res.render('addpost')
})


module.exports = app;