const Member = require('../models/membermodel');



exports.getMembersQuery = () =>{
    return Member.find({}).exec()
}


exports.createMemberQuery = (member) =>{
    return member.save()
}


exports.deleteMemberQuery = (memberId) =>{
    return Member.findByIdAndDelete(memberId).exec()
}


exports.updateMemberQuery = (memberId, newMember) =>{
    return Member.findByIdAndUpdate(memberId, 
        {$set: newMember}, {runValidators:true}).exec()
}
