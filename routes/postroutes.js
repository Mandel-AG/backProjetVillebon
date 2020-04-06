const app = require('express').Router()
const { getPost,filteredPosts, updatePost, deleteManyPosts, deletePost, createPost, postSearch } = require('../controllers/postroute.controller')
const multer = require('multer')
const upload = multer({ storage: multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, '/home/badel/Bureau/projetVillebonBD/files')
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
    })
});




app.get('/search', postSearch)



// Read post
app.get('/',getPost)



app.get('/type/:type',filteredPosts )




app.get('/editPost/:id', updatePost)

// Create post 
app.post('/', upload.single('file'), createPost)

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