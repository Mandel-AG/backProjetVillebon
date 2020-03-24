const Post = require('../models/postmodel')

exports.getPost = async (req,res) => {
    try{
        const post = await Post.find({}).exec()
        res.send(post)
    }
    catch(e){
        console.log(e)
    }
}

exports.createPost = async (req,res)=>{
    let post = new Post({
        title:req.body.title,
        description:req.body.description,
        typePost:req.body.typePost,
        media:'cheminimage',
        unique:true
    })
    try{
       const newpost = await post.save()
       res.redirect('/') 
       return newpost
    }
    catch(e){
       console.log(e) 
    }
}


exports.updatePost = async(req,res) =>{
    try{
        const updatedpost = await Post.findOneAndUpdate({_id:req.params.id}, 
            {$set: {
            title:req.body.title, 
            description:req.body.description,
            typePost:req.body.typePost, 
            media:req.body.media
        }},{new:true}).exec()
        res.send(updatedpost)
        // res.render('viewaddpost')
    }
    catch(e){
        console.log(e)
    }
}


// Delete plusieurs Posts
exports.deleteManyPosts = async (req,res) =>{
    try{
        const post = await Post.deleteMany({}).exec()
        res.send(post)
    }
    catch(e){
        console.log(e)
    }
}


// Delete 1 Post
exports. deletePost = async (req,res)=>{
    try{
        const deletedPost = await Post.deleteOne({_id:req.params.id}).exec()
        res.send(deletedPost)
    }
    catch(e){
        console.log(e)
    }
}