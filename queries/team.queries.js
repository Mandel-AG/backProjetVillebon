const Team = require('../models/teammodel');


exports.getTeamsQuery = () =>{
    return Team.find({}).exec()
    // return Media.find({}).populate('post').exec()
}


exports.createTeamQuery = (team) =>{
    return team.save()
}



exports.deleteTeamQuery = (teamId) =>{
    return Team.findByIdAndDelete(teamId).exec()
}


exports.updateTeamQuery = (teamId, newTeam) =>{
    return Team.findByIdAndUpdate(teamId,{$set:newTeam}, {runValidators:true}).exec()
}

