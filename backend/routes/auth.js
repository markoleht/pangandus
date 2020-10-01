const router = require('express').Router();
const User = require('../models/User');
const Account = require('../models/Account');
const bcrypt = require('bcrypt');
const { response } = require('express');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');
const { registerValidation, loginValidation } = require('../validation');

//REGISTER
//registers an userr
router.get('/', async (req, res) => {
    res.send('Viva la stallman, pendejo!')
}),
router.post('/', async (req, res) => {
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

    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

//LETS MAKE SURE THE EMAIL IS NOT ALREADY IN THE DATABASE

    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('wrong email or password');
    //PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid password')

    //CREATE AND ASSIGN A TOKEN

    const token =jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    res.send('Logged in!');
});

module.exports = router;