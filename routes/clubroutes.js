const app = require('express').Router();
const { createClub, getClubs, updateClub, editClub, deleteClub } = require('../controllers/clubroute.controller')
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path')
// const upload = multer({ storage: multer.diskStorage({
//     destination : (req, file, cb)=>{
//         cb(null, '/home/badel/Bureau/projetVillebonBD/files/club')
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
          bucketName: 'clubs'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });


// Create Club 
app.post('/', upload.single('file'), createClub);

// Read Club
app.get('/',getClubs)

// Update Club
app.post('/:id', updateClub)

app.get('/editClub/:id', editClub)


// Delete 1 Club
app.delete('/:id',deleteClub)

//view add Club
app.get('/add', (req,res)=>{
    res.render('addclub');
})

module.exports = app;