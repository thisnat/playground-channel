const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);


let topicSchema = new Schema({
    board: {
        type: String
    },
    topicId: {
        type: Number
    },
    title: {
        type: String
    },
    postCount: {
        type: Number
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    }
}, {
    collection: "topic"
});

topicSchema.plugin(AutoIncrement, {inc_field: 'topicId'});

module.exports = mongoose.model('Topic', topicSchema);;