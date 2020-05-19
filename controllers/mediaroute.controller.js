const Media = require('../models/mediamodel');
const Post = require('../models/postmodel');
const {getMediasQuery, createMediaQuery, updateMediaQuery, deleteMediaQuery} = require('../queries/medias.queries');



// Create Media 
exports.createMedia = async(req,res, next)=>{
    try{
        // const post = await Post.findOne({}).exec()
        const url = req.protocol + '://' + req.get('host');
        let media = new Media({
            
            name:req.body.name,
            mediaType: req.body.mediaType,
            team:req.body.team,
            description : req.body.description,
            picture:url + '/' + req.file.filename
        })
        console.log(req.file,'res')

        const newmedia = createMediaQuery(media)
        res.redirect('/medias/add')
    }
    catch(e){
        next(e);
    }
}


// Read media
exports.getMedias = async(req,res, next) => {
    try{
        const medias = await getMediasQuery()
        res.render('medias',{medias})
        console.log(medias)
    }catch(e){
        next(e);
    }
}

// Update media
exports.updateMedia = async(req, res, next)=>{
       try{
           const mediaid = req.params.id
           const newmedia = req.body
         await updateMediaQuery(mediaid, newmedia)
        res.redirect('/medias');
       } 
       catch(e){
           next(e);
       }
}


// Delete plusieurs Media
exports.deleteManyMedias = async(req,res, next)=>{
    try{
        const media = await deleteMediasQuery()
        res.send(media)
    }
    catch(e){
        next(e);
    }
}



// Delete 1 Media
exports.deleteMedia = async (req,res, next)=>{
    try{
        const mediaId = req.params.id
        await deleteMediaQuery(mediaId)
        const medias = await getMediasQuery()
        res.render('partials/media-list', {medias})
    }
    catch(e){
        next(e);
    }
}