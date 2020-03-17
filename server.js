const express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser')
nodemon = require('nodemon');
cors = require('cors')
const app = express();
// jwt = require('jsonwebtoken')

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://localhost/testprojet1', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


const Admin = require('./models/admin');
const Post = require('./models/post')
const Media = require('./models/media')



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
})



// Update Admin
app.put('/admin/update/:id', function(req,res){
    Admin.findOneAndUpdate({_id:req.params.id},{ $set:{email:req.body.email}},{new:true}).exec()
    .then(result => res.send(result))
})



// Delete Admin
app.delete('/admin/delete',function(req,res){
    Admin.deleteMany({}).exec()
        .then(result => res.send(result))
})






// Create post 
app.post('/post/add',(req,res)=>{
    let post = new Post({
        title:req.body.title,
        description:req.body.description,
        type:req.body.type,
        media:'',
        unique:true
    })

    post.save(function(err,data){
        if(err){
            res.send(err)
        }
        else if (data){
            res.send(data)
        }
        else{
            res.send('qqch')
        }
    })
})



// Read post
app.get('/post',function(req,res){
    Post.find({}).exec()
        .then(post => res.send(post))
        .catch(err => res.send(err))
})

// Update post
app.put('/post/update/:id', (req, res)=>{
    Post.findOneAndUpdate({_id:req.params.id}, 
        {$set: {
        title:req.body.title, 
        description:req.body.description,
        type:req.body.type, 
        media:req.body.media
    }},{new:true}).exec()
        .then(newpost=> res.send(newpost))
        .catch(err => res.send(err))
})



// Delete plusieurs Posts
app.delete('/post/delete', (req,res)=>{
    Post.deleteMany({}).exec()
        .then(data => res.send(data))
        .catch(err => res.send(err))
})

// Delete 1 Post
app.delete('/post/delete/:id', (req,res)=>{
    Post.deleteOne({_id:req.params.id}, (err,data)=>{
        if (err){
            res.send(err)
        }
        else if(data){
            res.send(data)
        }
        else{
            res.send('qqch')
        }
    })
})




// Create Media 
app.post('/media/add',(req,res)=>{

    Post.findOne({}).exec()
    .then(post=> {
        
        let media = new Media({
            name:req.body.name,
            type:req.body.type,
            chemin:req.body.chemin,
            post: post._id,
            unique:true
        })
        media.save(function(err,data){
            if(err){
                res.send(err)
            }
            else if (data){
                res.send(data)
            }
            else{
                res.send('qqch')
            }
        })

    })
})



// Read media
app.get('/media',function(req,res){
    Media.find({})
        .populate('post')
        .exec()
        .then(data => res.send(data))
})

// Update media
app.put('/media/:id', (req, res)=>{
    Media.find({_id:req.params.id},(err,data)=>{
        if (err){
            res.send(err)
        }
        else if (data){
            Media.update({name:req.body.name, type:req.body.type, chemin:req.body.chemin},(err,data)=>{
                res.send(data)
            })
        }
        else{
            res.send('qqch')
        }
    })
})


// Delete plusieurs Media
app.delete('/media/delete', (req,res)=>{
    Media.deleteMany({}, (err,data)=>{
        if (err){
            res.send(err)
        }
        else if(data){
            res.send(data)
        }
        else{
            res.send('qqch')
        }
    })
})

// Delete 1 Media
app.delete('/media/delete/:id', (req,res)=>{
    Media.deleteOne({_id:req.params.id}, (err,data)=>{
        if (err){
            res.send(err)
        }
        else if(data){
            res.send(data)
        }
        else{
            res.send('qqch')
        }
    })
})




app.listen(3004)

