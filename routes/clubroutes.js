const app = require('express').Router();
const { createClub, getClubs, updateClub, editClub, deleteClub } = require('../controllers/clubroute.controller')
const multer = require('multer');
const upload = multer({ storage: multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, '/home/badel/Bureau/projetVillebonBD/files/club')
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
    })
});


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