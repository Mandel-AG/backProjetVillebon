const Media = require('../models/mediamodel');
const Post = require('../models/postmodel');
const {getMediasQuery, createMediaQuery, updateMediaQuery, deleteMediaQuery, deleteMediasQuery} = require('../queries/medias.queries');



// Create Media 
exports.createMedia = async(req,res)=>{
    try{
        // const post = await Post.findOne({}).exec()
        let media = new Media({
            name:req.body.name,
            description : req.body.description,
            equipe:req.body.equipe,
            file:req.file.filename,
            typeMedia: req.body.typeMedia,
            // post: post._id,
        })

        const newmedia = createMediaQuery(media)
        res.redirect('/medias/add')
    }
    catch(e){
        console.log(e)
    }
}


// Read media
exports.getMedias = async(req,res) => {
    try{
        const medias = await getMediasQuery()
        res.json(medias)
        // res.render('medias',{medias})
    }catch(e){
        console.log(e)
    }
}

// Update media
exports.updateMedia = async(req, res)=>{
       try{
           const mediaid = req.params.id
           const newmedia = req.body
         await updateMediaQuery(mediaid, newmedia)
        res.redirect('/medias');
       } 
       catch(e){
           console.log(e)
       }
}


// Delete plusieurs Media
exports.deleteManyMedias = async(req,res)=>{
    try{
        const media = await deleteMediasQuery()
        res.send(media)
    }
    catch(e){
        console.log(e)
    }
}



// Delete 1 Media
exports.deleteMedia = async (req,res)=>{
    try{
        const mediaId = req.params.id
        await deleteMediaQuery(mediaId)
        const medias = await getMediasQuery()
        res.render('partials/media-list', {medias})
    }
    catch(e){
        console.log(e)
    }
}