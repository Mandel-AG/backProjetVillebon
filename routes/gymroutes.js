const app = require('express').Router();
const { createGym, getGyms, updateGym, deleteGym, editGym } = require('../controllers/gym.controller')
const multer = require('multer');
const upload = multer({ storage: multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, '/home/badel/Bureau/projetVillebonBD/files/gyms')
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
    })
});


// Create gyn 
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