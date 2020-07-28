const Member = require('../models/membermodel');
const Media = require('../models/mediamodel');
const { getMembersQuery, createMemberQuery, deleteMemberQuery, updateMemberQuery } = require('../queries/member.queries');


// Create Member 
exports.createMember = async(req,res, next)=>{
    try{
        const url = req.protocol + '://' + req.get('host');
        let member;
        if(req.file){
            member = new Member ({
                firstName:req.body.firstName,
                lastName : req.body.lastName,
                role : req.body.role,
                team : req.body.team,
                position : req.body.position,
                picture: url + '/api/members/files/' + req.file.filename 
            })
        } else{
            member = new Member ({
                firstName:req.body.firstName,
                lastName : req.body.lastName,
                role : req.body.role,
                team : req.body.team,
                position : req.body.position,
                picture: 'https://fnadepape.org/wp-content/uploads/2018/07/avatar-1577909_960_720.png'
            })
        }
    
        // if(member.picture){
        //     const media = new Media ({
        //         _id: member._id,
        //         name: member.role,
        //         mediaType: 'member' ,
        //         team : 'aucune',
        //         description : req.body.description,
        //         picture : req.file.filename
        //     })
        //     await media.save()
        // }
       
        await createMemberQuery(member)
        res.redirect('/members/add');
    }
    catch(e){
        next(e);
    }
}


// Read Member
exports.getMembers = async(req,res, next) => {
    try{
        const members = await getMembersQuery()
        res.render('members',{members})
    }catch(e){
        next(e);
    }
}

// Update Member
exports.updateMember = async(req, res, next)=>{
       try{
           const memberId = req.params.id;
           const newMember = req.body;
         await updateMemberQuery(memberId, newMember)
        res.redirect('/members');
       } 
       catch(e){
           next(e);
       }
}




// Delete 1 Member
exports.deleteMember = async (req,res, next)=>{
    try{
        const memberId = req.params.id
        await deleteMemberQuery(memberId)
        const members = await getMembersQuery()
        res.render('partials/members-list', {members})
    }
    catch(e){
        next(e);
    }
}

exports.editMember = async(req, res, next)=>{
    try{ 
        const member = await Member.findById({_id :req.params.id}).exec()
        res.render('updatemember', {member});
    }
    catch(e){
        next(e);
    }
}