const app = require('express').Router()
const { getEvent,editEvent, updateEvent, deleteEvent, createEvent } = require('../controllers/event.controller')
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const url = 'mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority';
 
// Create a storage object with a given configuration
const storage = new GridFsStorage({ url });
 
// Set multer storage engine to the newly created object
const upload = multer({ storage });




// const upload = multer({ storage: multer.diskStorage({
//     destination : (req, file, cb)=>{
//         cb(null, '/home/badel/Bureau/projetVillebonBD/files/events')
//     },
//     filename : (req, file, cb)=>{
//         cb(null, Date.now() + '-' + file.originalname)
//     }
//     })
// });



// Create gyEventm 
app.post('/', upload.single('file'), createEvent)

// Read Event
app.get('/',getEvent)

// Update Event
app.post('/:id', updateEvent)

// Edit event
app.get('/editEvent/:id', editEvent)

// Delete 1 Event
app.delete('/:id', deleteEvent)

//view add Event
app.get('/add', (req,res)=>{
    res.render('addevent')
})


// app.get('/search', eventSearch)



module.exports = app;