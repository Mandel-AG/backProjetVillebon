const Team = require('../models/teammodel');
const {getTeamsQuery, createTeamQuery, deleteTeamQuery, updateTeamQuery} = require('../queries/team.queries');



// Create Team 
exports.createTeam = async(req,res, next)=>{
    try{
        let team = new Team ({
            name:req.body.name,
            memberList : req.body.memberList,
            schedule : req.body.schedule,
            price : req.body.price,
            picture:req.file.filename,
            index:true
        })

        const newTeam = await createTeamQuery(team)
        res.redirect('/teams/add');
    }
    catch(e){
        next(e);
    }
}


// Read Team
exports.getTeams = async(req,res, next) => {
    try{
        const teams = await getTeamsQuery()
        res.render('teams',{teams})
    }catch(e){
        next(e);
    }
}

// Update Team
exports.updateTeam = async(req, res, next)=>{
       try{
           const teamId = req.params.id;
           const newTeam = req.body;
         await updateTeamQuery(teamId, newTeam)
        res.redirect('/teams');
       } 
       catch(e){
           next(e);
       }
}




// Delete 1 Team
exports.deleteTeam = async (req,res, next)=>{
    try{
        const teamId = req.params.id
        await deleteTeamQuery(teamId)
        const teams = await getTeamsQuery()
        res.render('partials/teams-list', {teams})
    }
    catch(e){
        next(e);
    }
}

exports.editTeam = async(req, res, next)=>{
    try{ 
        const team = await Team.findById({_id :req.params.id}).exec()
        res.render('updateTeam', {team});
    }
    catch(e){
        next(e);
    }
}