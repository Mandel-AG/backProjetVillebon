const Admin = require('../models/adminmodel');

// Create Admin
exports.createAdmin = async(req,res) =>{
    let admin = new Admin({
        email:req.body.email,
        password:req.body.password,
        unique:true
    })
    try{
        const newadmin = await admin.save()
        res.send(newadmin)
    }
    catch(e){
        console.log(e)
    }
}


// Read Admin
exports.getAdmin = async(req,res)=> {
    try{
        const admin = await Admin.find({}).exec()
        res.send(admin)

    }
    catch(e){
        console.log(e)
    }
}


// Update Admin
exports.updateAdmin = async(req,res)=> {
    try{
        const updatedAdmin = await Admin.findOneAndUpdate({_id:req.params.id},{ $set:{email:req.body.email}},{new:true}).exec()
        res.send(updatedAdmin)
    }
    catch(e){
        console.log(e)
    }
}


// Delete Admin
exports.deleteAdmin = async(req,res) => {
    try{
    const deletedAdmin = await Admin.deleteMany({}).exec()
    res.send(deletedAdmin)
    }
    catch(e){
        console.log(e)
    }
}