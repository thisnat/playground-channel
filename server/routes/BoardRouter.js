const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const boardSchema = require('../models/Board')

router.route('/').get((req, res) => {
    boardSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

router.route('/id/:id').get((req, res) => {
    boardSchema.findOne({'url' : req.params.id}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

router.route('/add').post((req, res, next) => {
    boardSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

module.exports = router;