const jwt = require('jsonwebtoken');

module.exports = function (req,res,next){
    const token =req.header('auth-token');
    if(!token) return res.status(401).send('Access denied!');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
}
module.exports = function (req, res, next){a
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401).send('You must create an account to acces this');

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403).send('You are not authorized to access this.');
        req.user = user;
        next();
    })
}