const Score = require('../models/scoremodel');


exports.getScoreQuery = () =>{
    return Score.find({}).exec()
}


exports.createScoreQuery = (score) =>{
    return score.save()
}

exports.updateScoreQuery = (score) =>{
    return score.save()
}

exports.deleteScoresQuery = () =>{
    return Score.deleteMany({}).exec()
}


exports.deleteScoreQuery = (scoreId) =>{
    return Score.findByIdAndDelete(scoreId).exec()
}


exports.updateScoreQuery = (scoreId, newscore) =>{
    return Score.findByIdAndUpdate(scoreId, 
        {$set: newscore}, {runValidators:true}).exec()
}
