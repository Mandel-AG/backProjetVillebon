const app = require('express').Router()
const { createAdmin, getAdmin, updateAdmin, deleteAdmin } = require('../controllers/admin.controller')


// Create Admin
app.post('/',createAdmin)



// Read Admin
app.get('/', getAdmin)



// Update Admin
app.put('/:id', updateAdmin)



// Delete Admin
app.delete('/', deleteAdmin)


module.exports = app;
