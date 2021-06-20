const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let topicSchema = new Schema({
    board: {
        type: String
    },
    title: {
        type: String
    },
    postCount: {
        type : Number
    },
    lastUpdate: {
        type : Date,
        default: Date.now
    },
    created_at: {
        type : Date,
        default: Date.now
    },
    status: {
        type: String
    }
}, {
    collection: "topic"
})

module.exports = mongoose.model('Topic', topicSchema);