const app = require('express').Router()
const { findAdminPerEmail } = require('../queries/admin.queries')
const Admin =  require('../models/adminmodel')
const Media = require('../models/mediamodel')
const Member = require('../models/membermodel')
const Club = require('../models/clubmodel');
const Score = require('../models/scoremodel');
const eventRoutes = require('./eventroutes')
const mediaRoutes = require('./mediaroutes')
const adminRoutes = require('./adminroutes')
const clubRoutes = require('./clubroutes');
const productRoutes = require('./productroutes');
const scoreRoutes = require('./scoreroutes');
const gymRoutes = require('./gymroutes');
const memberRoutes = require('./memberroutes');
const teamRoutes = require('./teamroutes');
const apiRoutes = require('./apiroutes');
const { ensureAuthentification } = require('../config/security.config');
const { sendMail } = require('../controllers/email.controller');


app.use('/events', ensureAuthentification, eventRoutes );
app.use('/medias', ensureAuthentification, mediaRoutes);
app.use('/admins', ensureAuthentification, adminRoutes);
app.use('/score', ensureAuthentification, scoreRoutes);
app.use('/clubs', ensureAuthentification, clubRoutes);
app.use('/products', ensureAuthentification, productRoutes);
app.use('/gyms', ensureAuthentification, gymRoutes);
app.use('/members', ensureAuthentification, memberRoutes);
app.use('/teams', ensureAuthentification, teamRoutes);
app.use('/api', apiRoutes);


app.get('/', (req,res)=>{
    res.render('login', { error : null })
})


app.get('/accueil', ensureAuthentification, (req,res)=>{
    res.render('accueil')
})


app.post('/send', sendMail, (req, res)=>{
        res.status(200);
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