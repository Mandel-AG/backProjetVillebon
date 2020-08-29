const mongoose = require('mongoose');
var Grid = require('gridfs-stream');



mongoose.connect('mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(()=> console.log('C\'est connecté !'));

module.exports = mongoose.createConnection('mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true});

// module.exports = mongoose.createConnection('mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority');