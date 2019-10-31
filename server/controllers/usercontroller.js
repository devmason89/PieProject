const router = require('express').Router();            //using express. 
const User = require('../db').import('../models/user');        //connect to db and choose correct model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');                   //new installs, set equal to constants and require them

//SIGNUP
router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 13)         //import to never store passwords as plain text. security issue. hasing scrambles the word into a whole different string. bcrypt don't use anything less than 12. will be salted 12 diff times
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign( { id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})  //seconds, mins, hrs. token is a way to securly transfer infro between servers. set up as a json object. is digitally signed. think of stamps to get into a concert. digital signing has to have a secret to verify (ours is knuckles)
            res.json( {
                user: user,      //setting user parameter to user object
                message: "user created",
                sessionToken: token
            })
        },
        createError = err => res.send(err)          //same as a .catch
    )
    .catch(err => res.send(500,err))    //more encompassing, catches all errors
})

//SIGNIN ROUTE
router.post('/signin', (req,res) => {
    User.findOne({ where: {email: req.body.user.email}})    //finding the user based on their email (bc it's unique!). findOne always returns a promise
    .then(user => {                                        //user is a parameter
        if(user) {                                          //default is true. so means if user is true
            bcrypt.compare(req.body.user.password, user.password, (err, matches) => {
                if (matches) {                               //does my password they used match my password in my database
                    let token = jwt.sign( {id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: "1d"})
                    res.json({
                        user: user,   //setting user parameter to an object key of user
                        message: 'successfully authenticated user',
                        sessionToken: token                      //ref to line 35
                    })
                } else {
                    res.status(502).send({ error: 'bad gateway, passwords don\'t match'})   //server received an invalid response. ie passwords dont match
                }
            }) 
        } else {
            res.status(500).send({error: 'failed to authenticate, no user found'})
        }        
        
    }, err => res.status(501).send({error: 'failed to process'})
    )
})



module.exports = router;            //exporting this file