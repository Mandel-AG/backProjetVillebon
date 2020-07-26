const app = require('express').Router();

const{createAdmin} = require('../controllers/admin.controller')
const Club = require('../models/clubmodel');
const Media = require('../models/mediamodel');
const Event = require('../models/eventmodel');
const Score = require('../models/scoremodel');
const Gym = require('../models/gymmodel');
const Team = require('../models/teammodel');
const Product = require('../models/productmodel');
const Member = require('../models/membermodel');
const mongoose =require('mongoose')
const url = 'mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority';
var Grid = require('gridfs-stream');
const mongo = require('mongodb');
Grid.mongo = mongoose.mongo;



const conn = require('../database/index.js');

let gfs;
conn.once('open', function () {
     gfs = Grid(conn.db);
})




// Create Admin
app.post('/new',createAdmin)


app.get('/medias',async(req,res, next) => {
    try{
        const medias = await Media.find({}).exec()
        res.json(medias);
    }catch(e){
        next(e);
    }
 })



app.get('/events',async(req,res, next) => {
   try{
       const events = await Event.find({}).exec()
       res.json(events);
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




// app.get('/pictures/files/:fileName',async(req,res, next) => {
//     try{
//         const medias = await Media.find({filename : req.params.filename}).exec()
//         // res.json(medias);
//         res.json(medias);
//         console.log(res)
//     }catch(e){
//         next(e);
//     }
//  })




// app.get('/pictures/files',(req,res, next) => {
//     console.log('oui oui', gfs.collection('uploads'))
//         gfs.collection('uploads').find({}).toArray((err,files) =>{
//             if(!files || files.length === 0){
//                 return res.status(404).json({
//                     err: 'No files exist'
//                 })
//             }
//                 // const readstream = gfs.createReadStream();
//                 // readstream.pipe(res);
            
//             return res.json(files);
//         })
//         // const medias = await Media.find({filename : req.params.filename}).exec()

//         // res.send({
//         //     ...medias,
//         //     postImgBase64: Buffer.from(medias.filename).toString('base64')
//         // });

//  })



app.get('/events/files/:fileid',(req,res, next) => {
 
        gfs.collection('events').findOne({ filename:req.params.fileid}, (err, file)=>{
            if(!file || file.length === 0){
                return res.status(404).json({
                    err: 'No files exist'
                })
            }
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            
            // return res.json(files);
        })
        // const medias = await Media.find({filename : req.params.filename}).exec()

        // res.send({
        //     ...medias,
        //     postImgBase64: Buffer.from(medias.filename).toString('base64')
        // });

 })



 app.get('/gyms/files/:fileid',(req,res, next) => {
 
    gfs.collection('gyms').findOne({ filename:req.params.fileid}, (err, file)=>{
        if(!file || file.length === 0){
            return res.status(404).json({
                err: 'No files exist'
            })
        }
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
            return res.status(200);
    })

})


app.get('/clubs/files/:fileid',(req,res, next) => {
 
    gfs.collection('clubs').findOne({ filename:req.params.fileid}, (err, file)=>{
        if(!file || file.length === 0){
            return res.status(404).json({
                err: 'No files exist'
            })
        }
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
            return res.status(200);

    })

})


app.get('/medias/files/:fileid',(req,res, next) => {

    gfs.collection('medias').findOne({ filename:req.params.fileid}, (err, file)=>{
        if(!file || file.length === 0){
            return res.status(404).json({
                err: 'No files exist'
            })
        }
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
            return res.status(200);
    })
})



app.get('/members/files/:fileid',(req,res, next) => {
 
    gfs.collection('members').findOne({ filename:req.params.fileid}, (err, file)=>{
        if(!file || file.length === 0){
            return res.status(404).json({
                err: 'No files exist'
            })
        }
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
            return res.status(200);

    })
})


app.get('/products/files/:fileid',(req,res, next) => {
 
    gfs.collection('products').findOne({ filename:req.params.fileid}, (err, file)=>{
        if(!file || file.length === 0){
            return res.status(404).json({
                err: 'No files exist'
            })
        }
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
            return res.status(200);
    })

})



app.get('/teams/files/:fileid',(req,res, next) => {
 
    gfs.collection('teams').findOne({ filename:req.params.fileid}, (err, file)=>{
        if(!file || file.length === 0){
            return res.status(404).json({
                err: 'No files exist'
            })
        }
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
            return res.status(200);
    })
    // const medias = await Media.find({filename : req.params.filename}).exec()

    // res.send({
    //     ...medias,
    //     postImgBase64: Buffer.from(medias.filename).toString('base64')
    // });

})


// -----------





module.exports = app;