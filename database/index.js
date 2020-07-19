const mongoose = require('mongoose');
var Grid = require('gridfs-stream');

module.exports = mongoose.connect('mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(()=> console.log('ok c\'est connecté !'));

module.exports = mongoose.createConnection('mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true});

// let gfs;

// conn.once('open', () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
//   // all set!
// })


// module.exports = mongoose.createConnection('mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority');