const Club = require('../models/clubmodel')


exports.getClubsQuery = () =>{
    return Club.find({}).exec()
    // return Media.find({}).populate('post').exec()
}


exports.createClubQuery = (club) =>{
    return club.save()
}


exports.updateClubQuery = (club) =>{
}


exports.deleteClubQuery = (clubId) =>{
    return Club.findByIdAndDelete(clubId).exec()
}


exports.deleteClubsQuery = () =>{
    return Club.deleteMany({}).exec()
}


exports.updateClubQuery = (clubId, newclub) =>{
    return Club.findByIdAndUpdate(clubId,{$set:newclub}, {runValidators:true}).exec()
}

