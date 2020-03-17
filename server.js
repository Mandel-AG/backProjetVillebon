const express = require('express'),
mongoose = require('mongoose'),
cors = require('cors')
const app = express();
const adminroutes = require('./routes/adminroutes')
const postroutes = require('./routes/postroutes')
const mediaroutes = require('./routes/mediaroutes')
// jwt = require('jsonwebtoken')

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());
app.use(adminroutes)
app.use(mediaroutes)
app.use(postroutes)

mongoose.connect('mongodb://localhost/testprojet1', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});



app.listen(3004)

