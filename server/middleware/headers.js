module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
}

//will check to see if it can perform the actions you want it to do. like a "preflight" check with API whether it is allowed to do those things. will send you a response saying if you can or cannot do these things. automatically issued by the broswer

//CORS: Cross Origin Resource System: determine whether browser blocks js code from other origins