const app = require('express').Router();

const Club = require('../models/clubmodel');
const Media = require('../models/mediamodel');
const Post = require('../models/postmodel');
const Score = require('../models/scoremodel');
const Gym = require('../models/gymmodel');
const Team = require('../models/teammodel');
const Product = require('../models/productmodel');
const Member = require('../models/membermodel');


app.get('/medias',async(req,res, next) => {
   try{
       const medias = await Media.find({}).exec()
       res.json(medias);
   }catch(e){
       next(e);
   }
})

app.get('/posts',async(req,res, next) => {
   try{
       const posts = await Post.find({}).exec()
       res.json(posts);
   }catch(e){
       next(e);
   }
})


app.get('/scores',async (req,res, next) => {
   try{
       const scores = await Score.find({}).exec()
       res.json(scores);
   }
   catch(e){
       next(e);
   }
})


app.get('/clubs',async(req,res, next) => {
   try{
       const clubs = await Club.find({}).exec()
       res.json(clubs);
   }catch(e){
       next(e);
   }
})

app.get('/teams',async(req,res, next) => {
    try{
        const teams = await Team.find({}).exec()
        res.json(teams);
    }catch(e){
        next(e);
    }
 })

app.get('/gyms',async(req,res, next) => {
    try{
        const gyms = await Gym.find({}).exec()
        res.json(gyms);
    }catch(e){
        next(e);
    }
})


app.get('/products',async(req,res, next) => {
    try{
        const products = await Product.find({}).exec()
        res.json(products);
    }catch(e){
        next(e);
    }
})

app.get('/members',async(req,res, next) => {
    try{
        const members = await Member.find({}).exec()
        res.json(members);
    }catch(e){
        next(e);
    }
})

module.exports = app;