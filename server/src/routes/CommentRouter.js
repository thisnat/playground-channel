const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const commentSchema = require('../models/Comment')

router.route('/').get((req, res) => {
    commentSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

//req.params.id must be int fix soon 
router.route('/id/:id').get((req, res) => {
    commentSchema.find({'topicId' : req.params.id}, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

router.route('/add').post((req, res, next) => {
    commentSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

module.exports = router;