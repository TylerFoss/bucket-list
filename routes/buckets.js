const express = require('express');
const router = express.Router();
const Bucket = require('../models/bucket');
const List = require('../models/list');
const Card = require('../models/card');


router.get('/', (req, res) => {
    Bucket.find( ( err, data ) => {
        res.json(data);
    });
});

router.post('/', (req, res) =>{
    new Bucket({
        name: req.body.name
    }).save( (err, data) => {
        res.json(data);
    });
});

module.exports = router;