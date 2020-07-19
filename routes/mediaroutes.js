const app = require('express').Router();
const { createMedia, getMedias, updateMedia, deleteMedia } = require('../controllers/mediaroute.controller')
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path')
// const upload = multer({ storage: multer.diskStorage({
//     destination : (req, file, cb)=>{
//         cb(null, '/home/badel/Bureau/projetVillebonBD/files/medias')
//     },
//     filename : (req, file, cb)=>{
//         cb(null, Date.now() + '-' + file.originalname)
//     }
//     })
// });




const storage = new GridFsStorage({
  url: 'mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'medias'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });



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