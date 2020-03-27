const app = require('express').Router()
const { createAdmin, getAdmins, updateAdmin, deleteAdmin, deleteAdmins } = require('../controllers/admin.controller')



// Read Admin
app.get('/', getAdmins)



// Create Admin
app.post('/',createAdmin)



// Update Admin
app.post('/updateAdmin/:id', updateAdmin)


// Delete Admins
app.delete('/:id', deleteAdmin)


//delete plusieurs Admins
app.delete('/deleteAll', deleteAdmins)



module.exports = app;
