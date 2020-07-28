const express = require('express'),
mongoose = require('mongoose'),
cors = require('cors')
const path = require('path')
require('./database/index')
const routing = require('./routes')
const cookieParser= require('cookie-parser');
const Admin = require('./models/adminmodel');
const { userInfo } = require('os');

const app = express();
exports.app = app;

app.use(cors({ origin: true }));

app.get('/', (req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  next();
})


app.use(cookieParser());
require('./config/jwt.config')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'files'))); 
app.use(express.static(path.join(__dirname,'club'))); 
app.use(express.static(path.join(__dirname,'events'))); 
app.use(express.static(path.join(__dirname,'gyms'))); 
app.use(express.static(path.join(__dirname,'medias'))); 
app.use(express.static(path.join(__dirname,'members'))); 
app.use(express.static(path.join(__dirname,'products'))); 
app.use(express.static(path.join(__dirname,'teams'))); 
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(routing)


// const newAdmin = new Admin ({
//   email: 'test@test.fr',
//   password :'test'
// })
// newAdmin.save()



//mongoose.connect('mongodb+srv://badel:@cluster0-f8esg.mongodb.net/testprojet1?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})

app.listen(process.env.PORT || 3003);

