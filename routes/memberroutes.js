const app = require('express').Router();
const { createMember, getMembers, updateMember, deleteMember, editMember } = require('../controllers/member.controller')
const multer = require('multer');
const upload = multer({ storage: multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, '/home/badel/Bureau/projetVillebonBD/files/members')
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
    })
});


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