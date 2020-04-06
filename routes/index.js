const app = require('express').Router()
const { findAdminPerEmail } = require('../queries/admin.queries')
const Admin =  require('../models/adminmodel')
const Post = require('../models/postmodel')
const Media = require('../models/mediamodel')
const Score = require('../models/scoremodel');
const postRoutes = require('./postroutes')
const mediaRoutes = require('./mediaroutes')
const adminRoutes = require('./adminroutes')
const scoreRoute = require('./scoreroutes');
const { ensureAuthentification } = require('../config/security.config')


app.use('/posts', ensureAuthentification, postRoutes )
app.use('/medias', ensureAuthentification,  mediaRoutes)
app.use('/admins', ensureAuthentification, adminRoutes)
app.use('/score', ensureAuthentification, scoreRoute)


app.get('/', (req,res)=>{
    res.render('login', { error : null })
})




app.get('/accueil', ensureAuthentification, (req,res)=>{
    res.render('accueil')
})






app.get('/editAdmin/:id', async(req,res)=>{
    try{ 
        const admin = await Admin.findById({_id :req.params.id}).exec()
        res.render('updateadmin', {admin})
    }
    catch(e){
        console.log(e)
    }
})


// app.get('/editScore/:id', async(req,res)=>{
//     try{ 
//         const score = await Score.findById({_id :req.params.id}).exec()
//         res.render('updatescore', {score})
//     }
//     catch(e){
//         console.log(e)
//     }
// })


app.get('/editPost/:id', async(req,res)=>{
    try{ 
        const post = await Post.findById({_id :req.params.id}).exec()
        res.render('updatepost', {post})
    }
    catch(e){
        console.log(e)
    }
})


app.get('/editMedia/:id', async(req,res)=>{
    try{ 
        const media = await Media.findById({_id :req.params.id}).exec()
        res.render('updatemedia', {media})
    }
    catch(e){
        console.log(e)
    }
})


// Login
app.post('/admin/login', async(req,res,next)=>{
    try{
        const { email , password } = req.body;
        const admin = await findAdminPerEmail(email);
        if (admin){
            const match = await admin.comparePassword(password)
            if(match){
                req.login(admin);
                res.status(200).redirect('/accueil')
            } else {
                res.render('login', { error : 'Wrong Password'})
            }
        } else {
            res.render('login', { error : 'User not Found'})
        }
    }
    catch(e){
        next(e);
    }
})






module.exports = app