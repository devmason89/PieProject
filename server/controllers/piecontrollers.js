// const express = require('express');      //pulling our dependency in 
// const router = express.Router();        //allows us to create modular export files. can funnel everything thru app.js

const router = require ('express').Router(); //can combine on one line
const Pie = require('../db').import('../models/pie');      //how we can talk to our models in our database
const validateSession = require('../middleware/validate-session'); //valids whether you are allowed to do things. like create posts without having an account, buy things on a website. 

router.get('/',(req, res) => {
    Pie.findAll()                             //referring to my model. .findAll is query method from sequelize
    .then(pie => res.status(200).json(pie))   //jsonifying my pie response
    .catch(err => res.status(500).json({error:err}))
})

router.post('/', validateSession, (req, res) => {
    const pieFromRequest = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        rating: req.body.rating
    }

    Pie.create(pieFromRequest)                        //passign the object i just created thru
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json(req.errors))          //jsonifying my parameter of pie
})

//How to Find one Row and Update it
router.get('/:name', (req, res) => {                              // adding a colon makes it dynamic. refers to a property in our model
  Pie.findOne({ where: { nameOfPie: req.params.name }})            //camelCasing error. findOne has where attribute object. params is part of my URL. name can be changed to anything. white nameOfPie is referring to the key
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err}))
})
router.put('/:id', validateSession, (req, res) => {                              //unique id that was given to us in pgAdmin
  Pie.update(req.body, { where: { id: req.params.id }})           //need to capitalize P . req.body refers to info you choose to send to the box in pgAdmin(create or an update) req.params refers to building out URL. req.body means you need to update info in PostMan. Will get a 1, meaning one of my records has been updated. any updates will be moved down on your table in pgAdmin
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json(req.errors))
})

// router.get('/pie', (req,res)=>res.send('I love pie!'))   //can just add a slash if don't want to add any sub-routing for this.

//*Writing a delete route to delete a pie
router.delete('/:id', validateSession, (req, res)=> {                             //deletes by unique row
    Pie.destroy({where: {id: req.params.id}})                    //no need for req.body bc no putting anything in body
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json(req.errors))                      //same as res.json({error:err}) . no need to write anything in the body in PostMan
})



module.exports = router;          //referring to our constant router on line 2. need to export it! won't work without this



