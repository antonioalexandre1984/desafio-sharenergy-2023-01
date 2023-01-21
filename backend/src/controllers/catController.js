const express = require('express');
const router = express.Router();
const axios = require('axios');

 router.get('/:id', async (req, res) => {
    const  id  = req.params.id;
    try {
        let cat = await axios.get(`https://http.cat/${id}`,{
            headers: {
                'Response-Type': 'blob',
                'Content-Type': 'image/jpeg',
                'Accept': 'image/jpeg',
            }
         });
        console.log(cat.data);
        return res.send(cat.data);
    } catch (err) {
        return res.status(400).send({ error: 'Error loading cats' });
    }
 });  



module.exports = app => app.use('/cat', router);

