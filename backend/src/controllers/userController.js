const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/',async (req, res) => {
    try {
        const users = await User.find();
        return res.send(users);
    } catch (err) {
        return res.status(400).send({ error: 'Error loading users' });
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
      res.send(user)
    } catch (err) {
        return res.status(400).send({ error: 'Error loading users' });
    }
});

router.post('/', async (req, res) => {
    try {
        const {name,email,cpf,cellphone,password,address } = req.body;
        
        const user = await User.create({
            name,
            email,
            cpf,
            cellphone,
            address,
            password,
        });
        await user.save();
        return res.send(user);
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error creating new user!' });
    }
});

router.put('/:userId', async (req, res) => {
    try {
        const { name,email,cpf,cellphone,password,address} = req.body;
        const user = await User.findByIdAndUpdate(req.params.userId, {
            name,
            email,
            cpf,
            cellphone,
            address,
            password,
            user: req.userId
        }, { new: true });
        
      
        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating user!' });
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.userId);
        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting user!' });
    }
});

module.exports = app => app.use('/users', router);
