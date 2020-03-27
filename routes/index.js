const app = require('express').Router()
const Admin =  require('../models/adminmodel')
const Post = require('../models/postmodel')
const Media = require('../models/mediamodel')
const postRoutes = require('./postroutes')
const mediaRoutes = require('./mediaroutes')
const adminRoutes = require('./adminroutes')

app.use('/posts', postRoutes )
app.use('/medias', mediaRoutes)
app.use('/admins', adminRoutes)



app.get('/', (req,res)=>{
    res.render('login')
})


// Login
app.post('/admin/login', function(req,res){
    Admin.findOne({}).exec()
        .then(user => {
            if(user.email === req.body.email){
                res.send(user)
                // res.redirect('/list')
            }
            else(res.send('la data est vide'))
        })
        .catch(err => res.send(err))
})



app.get('/accueil', (req,res)=>{
    res.render('accueil')
})

app.get('/admin/add',(req, res)=>{
    res.render('addadmin')
})

app.get('/editAdmin/:id', async(req,res)=>{
    try{ 
        const admin = await Admin.findOne({_id :req.params.id}).exec()
        res.render('updateadmin', {admin:admin})
    }
    catch(e){
        console.log(e)
    }
})


app.get('/actus', async(req,res)=>{
    try{ 
        const posts = await Post.find({typePost: 'actus'}).exec()
        const media = await Media.find({post: posts.id}).exec()
        res.render('actus', {posts, media})
    }
    catch(e){
        console.log(e)
    }
})


app.get('/equipes', async(req,res)=>{
    try{ 
        const posts = await Post.find({typePost:'equipe'}).populate().exec()
        res.render('equipes', {posts})

    }
    catch(e){
        console.log(e)
    }
})


app.get('/club', async(req,res)=>{
    try{ 
        const posts = await Post.find({typePost:'club'}).populate().exec()
        res.render('club', {posts})

    }
    catch(e){
        console.log(e)
    }
})







module.exports = app