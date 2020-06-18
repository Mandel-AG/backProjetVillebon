const app = require('express').Router()
const { getScore, updateScore, editScore, deleteManyScore, deleteScore, createScore } = require('../controllers/scoreroute.controller');






// Read score
app.get('/',getScore)




app.get('/editScore/:id', editScore)


// Create score 
app.post('/', createScore)

// Delete 1 Post
app.delete('/:id', deleteScore)


// Update score
app.post('/:id', updateScore)


// Delete plusieurs Posts
app.delete('/',deleteManyScore)


// view add
app.get('/add', (req,res)=>{
    res.render('addscore')
})


module.exports = app;