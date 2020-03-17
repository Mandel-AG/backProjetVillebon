const app = require('express').Router()
const Admin = require('../models/adminmodel');


// Login
app.post('/admin/login', function(req,res){
    Admin.findOne({}).exec()
        .then(user => {
            if(user.email === req.body.email){
                res.send(user)
            }
            else(res.send('la data est vide'))
        })
        .catch(err => res.send(err))
})




// Create Admin
app.post('/admin/create',function(req,res){
    let admin = new Admin({
        email:req.body.email,
        password:req.body.password,
        unique:true
    })
    admin.save(function(err,data){
        if(err){
            res.send(err);
        }
        else{
        res.send(data); 
        }
    }) 
})



// Read Admin
app.get('/admin',function(req,res){
    Admin.find({}).exec()
    .then(admins => res.send(admins))
    .catch(err => res.send(err))
})



// Update Admin
app.put('/admin/update/:id', function(req,res){
    Admin.findOneAndUpdate({_id:req.params.id},{ $set:{email:req.body.email}},{new:true}).exec()
    .then(result => res.send(result))
    .catch(err => res.send(err))
})



// Delete Admin
app.delete('/admin/delete',function(req,res){
    Admin.deleteMany({}).exec()
        .then(result => res.send(result))
        .catch ( err => res.send(err))
})


module.exports = app;
