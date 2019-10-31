require('dotenv').config();             //pulling in our env file into our project

const express = require('express');      //coming from our dependencies where we installed it
const app = express();   //type of fx. middleware
const pies = require('./controllers/piecontrollers');     //telling us where our new 
const user = require('./controllers/usercontroller');
const sequelize = require('./db');        //how we import our database

sequelize.sync();
app.use(express.json());        //method built into express. returns middleware. processing request & sending response. only used for a POST OR A PUT. with get or delete, no data gets sent.
app.use(require('./middleware/headers'));

app.use('/pies', pies);           //hey go talk to this file
app.use('/auth',user);          //creating a path to go talk to it. first part is the url, then referring to line 5 user


// app.get('/pies',(req,res)=> res.send('I love pie!'));        //need to store in a different folder, easier when things go wrong

// app.listen(3000, () => console.log('app is listening on 3000.'))                              //listen is a part of the express module. expects a port number & a callback fx. setting up our server on port 3000.

// app.use(express.static(__dirname + '/public'));   //.use, .get, and .render all run through express. looking for the root and seeting it to a string
// console.log('dirname',__dirname);                //__dirname is the pathway (2 underscores)

// app.get('/',(req,res)=>res.render('index'));

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}.`))  //important for when we use API KEYS, NAME OF OUR DATABASES


//order of this file does matter. need to put headers file above the routing (endpoints like /pies )
