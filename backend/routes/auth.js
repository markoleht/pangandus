const router = require('express').Router();
const User = require('../models/User');
const Account = require('../models/Account');
const Session = require('../models/Session');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authenticateToken')

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
router.post('/session',  async (req, res) => {
    const legitSession = new Session({
        email: req.body.email,
        password: req.body.password
    });
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('wrong email or password');
    if(req.body.password !== user.password) return res.status(400).send('Wrong password');
    try {
        const session = await legitSession.save();
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token);
        res.json({"message": "Logged in", "token": token});
        res.status(200);
    } catch (e) {
        res.statusCode = 409
        res.json({"message": e });
        res.json('The session was not initiated.');
    }
    // This part returns errors if email or password are incorrect

});
router.get('/session', authenticateToken, async (req, res) => {
    res.send('asjd')
})
router.delete('/session', authenticateToken, async (req, res, next) => {
    const token = null;
    res.header('auth-token', token);
    res.json('Logged out!');
    res.status(200);
    res.redirect('./index.js').send({ title: 'Hasta la vista, baby'});
})

module.exports = router;