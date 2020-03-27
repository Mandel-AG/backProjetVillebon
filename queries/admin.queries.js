const Admin = require('../models/adminmodel')


//plusieurs admin
exports.getAdminsQuery = ()=>{
    return Admin.find({}).exec()
}


//plusieurs admins
exports.deleteAdminsQuery = () =>{
    return Admin.deleteMany({}).exec()
}

// un admin
exports.deleteAdminQuery = (adminId) =>{
    return Admin.findByIdAndDelete(adminId).exec()
}

exports.createAdminQuery = (admin) =>{
    return admin.save()
}


exports.updateAdminQuery = (adminId, newEmail) =>{
    return Admin.findByIdAndUpdate(adminId,{ $set:{email:newEmail}},{new:true}).exec()
    
}

