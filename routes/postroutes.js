const app = require('express').Router()
const Post = require('../models/postmodel')


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
    Post.deleteOne({_id:req.params.id}).exec()
        .then( result => res.send(result))
        .catch( err => res.send(err))
})


module.exports = app;