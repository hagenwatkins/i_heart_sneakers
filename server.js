const express = require('express');
const mustache = require('mustache-express');
const mongoose = require('mongoose');
const sneakersRoutes = require('./routes/sneakers');
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.urlencoded({extended:false}));



const mustacheExpressInstance = mustache();
mustacheExpressInstance.cache = null;

app.engine('mustache', mustacheExpressInstance);

app.set('view engine', 'mustache');
app.set('views',__dirname + '/views');

app.use(express.static('public'));




app.use('/', sneakersRoutes);

//let todos = { todos : [{description: 'Make a todo site.',done: false}]};
//




let url = "mongodb://localhost:27017/i_want_sneakers";
mongoose.connect(url, {useMongoClient: true}).then(function(){
  console.log('Connected to the Database');
});

app.listen(5000, function() {
    console.log('Rocafella! Roll with the winners');
  });
