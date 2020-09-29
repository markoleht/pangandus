const User = require('../models/User');
const Account = require('../models/Account');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

exports.signup = async (req, res, next) => {
    try {
        const { email, firstname, lastname, password } = req.body
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ email, firstname, lastname, password: hashedPassword});
        const newAccount = new Account({ user: newUser._id});
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        });
        await newUser.save();
        await newAccount.save();

        res.json({
            data: newUser,
            // accessToken
        })
    } catch (error) {
        next(error)
    }
}
