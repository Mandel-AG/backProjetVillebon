const Media = require('../models/mediamodel')


exports.getMediasQuery = () =>{
    return Media.find({}).exec()
    // return Media.find({}).populate('post').exec()
}


exports.createMediaQuery = (media) =>{
    return media.save()
}



exports.deleteMediaQuery = (mediaId) =>{
    return Media.findByIdAndDelete(mediaId).exec()
}



exports.updateMediaQuery = (mediaId, newMedia) =>{
    return Media.findByIdAndUpdate(mediaId,{$set:newMedia}, {runValidators:true}).exec()
}

