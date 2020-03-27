const express = require('express'),
mongoose = require('mongoose'),
cors = require('cors')
const path = require('path')
const routing = require('./routes')

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());
app.use(routing)
app.use(express.static(path.join(__dirname,'public/')))

mongoose.connect('mongodb://localhost/testprojet1', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.listen(3004)

