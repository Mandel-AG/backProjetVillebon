const app = require('express').Router();
const { createTeam, getTeams, updateTeam, deleteTeam, editTeam } = require('../controllers/team.controller')
const multer = require('multer');
const upload = multer({ storage: multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, '/home/badel/Bureau/projetVillebonBD/files/teams')
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
    })
});


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