const app = require('express').Router()
const Post = require('../models/postmodel')
const Media = require('../models/mediamodel')
const postRoutes = require('./postroutes')
const mediaRoutes =  require('./mediaroutes')
const adminRoutes = require('./adminroutes')

app.use('/post', postRoutes )
app.use('/media', mediaRoutes)
app.use('/admin', adminRoutes)



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


app.get('/list', async (req,res)=>{
    const post = Post.find({}).exec()
        .then(data => data)
        .catch(err => console.log('post', err))
    
    const media = Media.find({}).exec()
        .then(data => data)
        .catch(err => console.log('media', err))
    
    const [posts, medias] = await Promise.all([post, media])
    .then(value => value)

    res.render('list', {posts, medias})
})

app.get('/addpost', (req,res)=>{
    res.render('viewaddpost')
})

app.get('/medi', (req,res)=>{
    res.render('viewaddmedia')
})

app.get('/accueil', (req,res)=>{
    res.render('accueil')
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
        const posts = await Post.find({typePost: 'equipe'}).exec()
        const media = await Media.find({post: posts.id}).exec()
        res.render('equipes', {posts, media})

    }
    catch(e){
        console.log(e)
    }
})


app.get('/Club', async(req,res)=>{
    try{ 
        const posts = await Post.find({typePost:'club'}).exec()
        const media = await Media.find({post: posts.id}).exec()
        res.render('listClub', {posts, media})

    }
    catch(e){
        console.log(e)
    }
})


module.exports = app