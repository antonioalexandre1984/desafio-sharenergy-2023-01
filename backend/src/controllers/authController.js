const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
    return jwt.sign({params,},authConfig.secret, {
        expiresIn: 86400,
    }); 
    
}

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        return res.send({ users });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading users' });
    }
});

router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists' });
        const user = await User.create(req.body);
        user.password = undefined;
        return res.send({
            user,
            token: generateToken({
                id: user.id,
                email: user.email,
            }),
        });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne
        ({ email }).select('+password');
    if (!user)
        return res.status(400).send({ error: 'User not found' });
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' });
    user.password = undefined;
     
    res.send({
        user,
        token: generateToken({
            id: user.id,
            email: user.email,
            password: user.password,
        }),
    });
});

router.post('/forgot_password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).send({ error: 'User not found' });
        const token = crypto.randomBytes(20).toString('hex');
        const now = new Date();
        now.setHours(now.getHours() + 1);
        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });
    } catch (err) {
       
        res.status(400).send({ error: 'Error on forgot password, try again' });
    }

});

router.post('/reset_password', async (req, res) => {
    const { email, token, password } = req.body;
    try {
        const user = await User.findOne
            ({ email })
            .select('+passwordResetToken passwordResetExpires');
        if (!user)
            return res.status(400).send({ error: 'User not found' });
        if (token !== user.passwordResetToken)
            return res.status(400).send({ error: 'Token invalid' });
        const now = new Date();
        if (now > user.passwordResetExpires)
            return res.status(400).send({ error: 'Token expired, generate a new one' });
        user.password = password;
        await user.save();
        res.send();
    } catch (err) {
        res.status(400).send({ error: 'Cannot reset password, try again' });
    }
});

module.exports = app => app.use('/auth', router);