const app = require('express').Router();
const { createGym, getGyms, updateGym, deleteGym, editGym } = require('../controllers/gym.controller')
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path')
// const upload = multer({ storage: multer.diskStorage({
//     destination : (req, file, cb)=>{
//         cb(null, '/home/badel/Bureau/projetVillebonBD/files/gyms')
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
            bucketName: 'gyms'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  
  const upload = multer({ storage });


// Create Gym
app.post('/', upload.single('file'), createGym);

// Read Gym
app.get('/',getGyms)

// Update Gym
app.post('/:id', updateGym)

app.get('/editGym/:id', editGym)

// Delete 1 Gym
app.delete('/:id',deleteGym)

//view add Gym
app.get('/add', (req,res)=>{
    res.render('addgym');
})

module.exports = app;