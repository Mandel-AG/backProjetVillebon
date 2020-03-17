const app = require('express').Router()
const Post = require('../models/postmodel')
const Media = require('../models/mediamodel')



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
        media.save()
    })
    .catch(err=> res.send(err))
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
    Media.find({_id:req.params.id}).exec()
        .then(media => {
            Media.update({name:req.body.name, type:req.body.type, chemin:req.body.chemin},(err,data)=>{
                res.send(data)
            })
        })  
        .catch(err => res.send(err))  
})


// Delete plusieurs Media
app.delete('/media/delete', (req,res)=>{
    Media.deleteMany({}).exec()
        .then(data => res.send(data))
        .catch(err => res.send(err))
})

// Delete 1 Media
app.delete('/media/delete/:id', (req,res)=>{
    Media.deleteOne({_id:req.params.id}).exec()
        .then(element => res.send(element))
        .catch(err => res.send(err))
})


module.exports = app;