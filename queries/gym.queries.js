const Gym = require('../models/gymmodel');


exports.getGymsQuery = () =>{
    return Gym.find({}).exec()
    // return Media.find({}).populate('post').exec()
}


exports.createGymQuery = (gym) =>{
    return gym.save()
}



exports.deleteGymQuery = (gymId) =>{
    return Gym.findByIdAndDelete(gymId).exec()
}


exports.updateGymQuery = (gymId, newGym) =>{
    return Gym.findByIdAndUpdate(gymId,{$set:newGym}, {runValidators:true}).exec()
}

