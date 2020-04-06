const express = require('express'),
mongoose = require('mongoose'),
cors = require('cors')
const path = require('path')
const routing = require('./routes')
const cookieParser= require('cookie-parser');


const app = express();
exports.app = app;


app.use(cookieParser());
require('./config/jwt.config')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'files'))); 

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());
app.use(routing)




mongoose.connect('mongodb://localhost/testprojet1', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});

app.listen(3004)

