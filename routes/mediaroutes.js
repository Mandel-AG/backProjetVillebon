const app = require('express').Router()
const { createMedia, getMedias, updateMedia, deleteManyMedias, deleteMedia } = require('../controllers/mediaroute.controller')


// Create Media 
app.post('/', createMedia)

// Read media
app.get('/',getMedias)

// Update media
app.put('/:id', updateMedia)

// Delete plusieurs Media
app.delete('/',deleteManyMedias)

// Delete 1 Media
app.delete('/:id',deleteMedia)

//view add media
app.get('/add', (req,res)=>{
    res.render('addmedia')
})

module.exports = app;