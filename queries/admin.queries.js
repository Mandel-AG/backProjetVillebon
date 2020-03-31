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

exports.createAdminQuery = async(admin) =>{
    try{
        const hashedPassword = await Admin.hashPassword(admin.password)
        const newAdmin = new Admin ({
            email: admin.email,
            password : hashedPassword
        })
        newAdmin.save();
    }
    catch(e){
        console.log(e)
    } 
}


exports.updateAdminQuery = (adminId, newAdmin) =>{
    return Admin.findByIdAndUpdate(adminId,{ $set: newAdmin}, {runValidators:true}).exec()
}


exports.findAdminPerId = (adminId) =>{
    return Admin.findOne({_id : adminId}).exec()
}

exports.findAdminPerEmail = (email) =>{
    return Admin.findOne({email : email}).exec()
}