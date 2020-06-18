const app = require('express').Router();
const { createMedia, getMedias, updateMedia, deleteMedia } = require('../controllers/mediaroute.controller')
const multer = require('multer');
const upload = multer({ storage: multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, '/home/badel/Bureau/projetVillebonBD/files/medias')
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
    })
});


// Create Media 
app.post('/', upload.single('file'), createMedia);

// Read media
app.get('/',getMedias)

// Update media
app.post('/:id', updateMedia)

// Delete 1 Media
app.delete('/:id',deleteMedia)

//view add media
app.get('/add', (req,res)=>{
    res.render('addmedia');
})

module.exports = app;