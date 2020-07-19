const app = require('express').Router();
const { createMember, getMembers, updateMember, deleteMember, editMember } = require('../controllers/member.controller')
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path')
// const upload = multer({ storage: multer.diskStorage({
//     destination : (req, file, cb)=>{
//         cb(null, '/home/badel/Bureau/projetVillebonBD/files/members')
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
          bucketName: 'members'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });



// Create  
app.post('/', upload.single('file'), createMember);

// Read Member
app.get('/',getMembers)

// Update Member
app.post('/:id', updateMember)

app.get('/editMember/:id', editMember)

// Delete 1 Member
app.delete('/:id',deleteMember)

//view add Member
app.get('/add', (req,res)=>{
    res.render('addmember');
})

module.exports = app;