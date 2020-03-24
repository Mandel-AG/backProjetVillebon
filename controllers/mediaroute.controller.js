const Media = require('../models/mediamodel')
const Post = require('../models/postmodel')



// Create Media 
exports.createMedia = async(req,res)=>{
    try{
        const post = await Post.findOne({}).exec()
        let media = new Media({
            name:req.body.name,
            type:req.body.type,
            chemin:req.body.chemin,
            post: post._id,
            unique:true
        })
        
        const newmedia = await media.save()
        res.redirect('/medi')
    }
    catch(e){
        console.log(e)
    }
}


// Read media
exports.getMedias = async(req,res) => {
    try{
        const media = await Media.find({}).populate('post').exec()
        res.send(media)
    }catch(e){
        console.log(e)
    }
}


// Update media
exports.updateMedia = async(req, res)=>{
       try{
        const updatemedia = await Media.findOneAndUpdate({_id:req.params.id},{$set:{name:req.body.name, type:req.body.type, chemin:req.body.chemin}}, {new:true}).exec()
        res.send(updatemedia)
       } 
       catch(e){
           console.log(e)
       }
}


// Delete plusieurs Media
exports.deleteManyMedias = async(req,res)=>{
    try{
        const media = await Media.deleteMany({}).exec()
        res.send(media)
    }
    catch(e){
        console.log(e)
    }
}



// Delete 1 Media
exports.deleteMedia = async (req,res)=>{
    try{
        const media = await Media.deleteOne({_id:req.params.id}).exec()
        res.send(media)
    }
    catch(e){
        console.log(e)
    }
}