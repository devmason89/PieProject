const jwt = require ('jsonwebtoken');
const User = require('../db').import("../models/user");

const validateSession = (req, res, next) => {
    if (req.method == 'OPTIONS') {               //ERROR HANDLING
        next();
    } else {
    const token = req.headers.authorization;       //setting variable equal to request headers object and authorization key. going to use it to see if we are allowed to do something (on the headers file
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {        //unscrambling the password in process.env.jwt_secret
        if(!err && decoded) {        //if have no errors and password was decoded succesfully
            User.findOne(              //find my user my id
                { where: {id: decoded.id } },
            console.log(decoded)
            )
            .then(user => {
                if(!user) throw 'err'        //if don't have a user, 
                req.user = user              //set parameter request to user
                console.log(req.user)        //wil give us all our user information (big object)
                return next()             //code after next is unreachable. prevents us from using callback fx a 2nd time
            })
            .catch(err => next (err) )
        } else {
            req.errors = err 
            return res. status(500).send('Not authorized')
        }
     })
    }  
}

module.exports = validateSession;