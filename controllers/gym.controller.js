const Gym = require('../models/gymmodel');
const Media = require('../models/mediamodel');
const {getGymsQuery, createGymQuery, deleteGymQuery, updateGymQuery} = require('../queries/gym.queries');



// Create Gym 
exports.createGym = async(req,res, next)=>{
    try{
        const url = req.protocol + '://' + req.get('host');
        let gym = new Gym ({
            name:req.body.name,
            adress : req.body.adress,
            introduction : req.body.introduction,
            picture: url + '/gyms/' + req.file.filename
        })

        let media = new Media ({
            _id: gym._id,
            name: gym.name,
            mediaType: 'gym' ,
            team : 'aucune',
            description : gym.introduction,
            picture : gym.picture
        })
        await media.save()

        const newGym = await createGymQuery(gym)
        res.redirect('/gyms/add');
    }
    catch(e){
        next(e);
    }
}


// Read Gym
exports.getGyms = async(req,res, next) => {
    try{
        const gyms = await getGymsQuery()
        res.render('gyms',{gyms})
    }catch(e){
        next(e);
    }
}

// Update Gym
exports.updateGym = async(req, res, next)=>{
       try{
           const gymId = req.params.id;
           const newGym = req.body;
         await updateGymQuery(gymId, newGym)
        res.redirect('/gyms');
       } 
       catch(e){
           next(e);
       }
}




// Delete 1 Gym
exports.deleteGym = async (req,res, next)=>{
    try{
        const gymId = req.params.id
        await deleteGymQuery(gymId)
        const gyms = await getGymsQuery()
        res.render('partials/gyms-list', {gyms})
    }
    catch(e){
        next(e);
    }
}

exports.editGym = async(req, res, next)=>{
    try{ 
        const gym = await Gym.findById({_id :req.params.id}).exec()
        res.render('updategym', {gym});
    }
    catch(e){
        next(e);
    }
}