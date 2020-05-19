const Club = require('../models/clubmodel');
const {getClubsQuery, createClubQuery, updateClubQuery, deleteClubQuery} = require('../queries/club.queries');



// Create Media 
exports.createClub = async(req,res)=>{
    try{
        let club = new Club({
            name:req.body.name,
            introduction : req.body.introduction,
            picture:req.file.filename
        })

        const newclub = createClubQuery(club)
        res.redirect('/clubs/add')
    }
    catch(e){
        console.log(e)
    }
}


// Read club
exports.getClubs = async(req,res) => {
    try{
        const clubs = await getClubsQuery()
        res.render('clubs',{clubs})
    }catch(e){
        console.log(e)
    }
}

// Update club
exports.updateClub = async(req, res)=>{
       try{
           const clubId = req.params.id
           const newclub = req.body
         await updateClubQuery(clubId, newclub)
        res.redirect('/clubs');
       } 
       catch(e){
           console.log(e)
       }
}

exports.editClub = async(req, res, next)=>{
    try{ 
        const club = await Club.findById({_id :req.params.id}).exec()
        res.render('updateclub', {club});
    }
    catch(e){
        next(e);
    }
}





// Delete 1 club
exports.deleteClub = async (req,res)=>{
    try{
        const clubId = req.params.id
        await deleteClubQuery(clubId)
        const clubs = await getClubsQuery()
        res.render('partials/clubs-list', {clubs})
    }
    catch(e){
        console.log(e)
    }
}