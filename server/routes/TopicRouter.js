const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const topicSchema = require('../models/Topic')

router.route('/').get((req, res) => {
    topicSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

router.route('/board/:id').get((req, res) => {
    topicSchema.find({'board' : req.params.id}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

router.route('/add').post((req, res, next) => {
    topicSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

module.exports = router;