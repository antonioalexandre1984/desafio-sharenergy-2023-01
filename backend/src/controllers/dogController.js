const express = require('express');
const router = express.Router();
const urlAPiDog = 'https://api.thedogapi.com/v1/breeds';
const axios = require('axios');

function generateDogs(name,image) {
    return axios.get(urlAPiDog, {
        params: {
            name,
            image,
        }
    });
}

router.get('/', async (req, res) => {
    try {
        let dog = await generateDogs();
        console.log(dog.data);
        return res.send(dog.data);
    } catch (err) {
        return res.status(400).send({ error: 'Error loading dogs' });
    }
});

module.exports = app => app.use('/dog', router);

