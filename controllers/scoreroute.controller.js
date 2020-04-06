const Score = require('../models/scoremodel');
const{getScoreQuery, updateScoreQuery, createScoreQuery, deleteScoresQuery, deleteScoreQuery } = require('../queries/score.queries')

exports.getScore = async (req,res) => {
    try{
        const scores = await getScoreQuery();
        console.log(scores)
        res.render('scores',{scores});
    }
    catch(e){
        console.log(e)
    }
}




exports.createScore = async (req,res)=>{
    try{
        let score = new Score({
            pointsA:req.body.pointsA,
            pointsB:req.body.pointsB,
            equipe:req.body.equipe,
            result : req.body.result
        })
        
        console.log(score, 'score')

       const newScore = await createScoreQuery(score)
       res.redirect('/score/add');
    }
    catch(e){
       console.log(e) 
    }
}





exports.updateScore = async(req,res) =>{
    try{
    const newscore = req.body;
    const scoreId = req.params.id;
        await updateScoreQuery(scoreId, newscore)
        res.redirect('/score');
    }
    catch(e){
        console.log(e);
    }
}



exports.editScore = async(req, res, next)=>{
    try{ 
        const score = await Score.findById({_id :req.params.id}).exec()
        res.render('updatescore', {score})
    }
    catch(e){
        console.log(e)
    }
}





// Delete plusieurs Posts
exports.deleteManyScore = async (req,res) =>{
    try{
        const score = await deleteScoresQuery()
        res.send(score);
    }
    catch(e){
        console.log(e)
    }
}



// Delete 1 Post
exports.deleteScore = async (req,res)=>{
    try{
        const scoreId = req.params.id
        await deleteScoreQuery(scoreId)
        const scores = await getScoreQuery()
        res.render('partials/score-list', {scores})
    }
    catch(e){
        console.log(e)
    }
}
