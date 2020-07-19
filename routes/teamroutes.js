const app = require('express').Router();
const { createTeam, getTeams, updateTeam, deleteTeam, editTeam } = require('../controllers/team.controller')
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path')
// const upload = multer({ storage: multer.diskStorage({
//     destination : (req, file, cb)=>{
//         cb(null, '/home/badel/Bureau/projetVillebonBD/files/teams')
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
            bucketName: 'teams'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  
  const upload = multer({ storage });



// Create team 
app.post('/', upload.single('file'), createTeam);

// Read Team
app.get('/',getTeams)

// Update Team
app.post('/:id', updateTeam)

app.get('/editTeam/:id', editTeam)

// Delete 1 Team
app.delete('/:id',deleteTeam)

//view add Team
app.get('/add', (req,res)=>{
    res.render('addteam');
})

module.exports = app;