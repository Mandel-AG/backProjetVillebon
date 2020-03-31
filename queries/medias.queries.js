const Media = require('../models/mediamodel')


exports.getMediasQuery = () =>{
    return Media.find({}).populate('post').exec()
}


exports.createMediaQuery = (media) =>{
    return media.save()
}


exports.updateMediaQuery = (admin) =>{
}


exports.deleteMediaQuery = (mediaId) =>{
    return Media.findByIdAndDelete(mediaId).exec()
}


exports.deleteMediasQuery = () =>{
    return Media.deleteMany({}).exec()
}


exports.updateMediaQuery = (mediaId, newMedia) =>{
    return Media.findByIdAndUpdate(mediaId,{$set:newMedia}, {runValidators:true}).exec()
}

