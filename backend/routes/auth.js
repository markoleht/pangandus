const router = require('express').Router();
const User = require('../models/User');
const Account = require('../models/Account');
const Session = require('../models/Session');
const { response } = require('express');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation');

require('dotenv').config();

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const account = new Account({ user: user._id, balance: 200 });
    try {
        const savedUser = await user.save();
        const savedAccount = await account.save();
        res.json(savedUser);
    } catch (e) {
        res.statusCode = 409
        //res.json({message: err });
        res.json('Email exists.');
    }
});

//LOGIN
router.post('/login',  async (req, res) => {
    const legitSession = new Session({
        email: req.body.email,
        password: req.body.password
    })
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('wrong email or password');
    if(req.body.password !== user.password) return res.status(400).send('Wrong password');
        
    try {
        const session = await legitSession.save();
        res.json(session);
        //CREATE AND ASSIGN A TOKEN
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).json({access_token: token});
        res.json('Logged in!');
        res.status(200);
    } catch (e) {
        res.statusCode = 409
        res.json({message: err });
        res.json('The session was not initiated.');
    }
    // This part returns errors if email or password are incorrect
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

});
function authenticateToken(req, res, next){
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}
module.exports = router;