const {getAdminsQuery, deleteAdminsQuery, deleteAdminQuery, createAdminQuery, updateAdminQuery} = require('../queries/admin.queries')



// Create Admin
exports.createAdmin = async(req,res) =>{
    try{
        const body = req.body;
        const admin = await createAdminQuery(body);
        req.login(admin)
        res.status(200).redirect('/admins')
    }
    catch(e){
        console.log(e)
    }
}



// Read Admin
exports.getAdmins = async(req,res)=> {
    try{
        const admins = await getAdminsQuery()
        res.render('admin',{admins})
    }
    catch(e){
        console.log(e)
    }
}


// Update Admin
exports.updateAdmin = async(req,res)=> {
    try{
        const adminId = req.params.id;
        let newEmail = req.body;
        await updateAdminQuery(adminId, newEmail)
        res.redirect('/admins')
    }
    catch(e){
        console.log(e)
    }
}


// Delete Admins
exports.deleteAdmins = async(req,res) => {
    try{
    const deletedAdmins = await deleteAdminsQuery()
    res.send(deletedAdmins)
    }
    catch(e){
        console.log(e)
    }
}

// un admin
exports.deleteAdmin = async(req,res) => {
    try{
        const adminId = req.params.id;
        await deleteAdminQuery(adminId);
        const admins = await getAdminsQuery()
        res.render('partials/admins-list', {admins})
    }
    catch(e){
        console.log(e)
    }
}



exports.signOut = (req,res,next)=>{
    req.logout();
    res.redirect('/')
}