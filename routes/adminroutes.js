const app = require('express').Router();
const { createAdmin, getAdmins, updateAdmin, deleteAdmin, deleteAdmins, signOut } = require('../controllers/admin.controller')
// const { ensureAuthentification } =  require('../config/security.config')


// Read Admin
app.get('/', getAdmins)


//register
app.get('/add',(req, res)=>{
    res.render('addadmin')
})



app.get('/signOut', signOut )


// Create Admin
app.post('/new',createAdmin)

// Update Admin
app.post('/updateAdmin/:id', updateAdmin)


// Delete Admins
app.delete('/:id', deleteAdmin)


//delete plusieurs Admins
app.delete('/deleteAll', deleteAdmins)






module.exports = app;
