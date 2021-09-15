const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let boardSchema = new Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    url: {
        type: String
    },
    status: {
        type: String
    }
}, {
    collection: "board"
})

module.exports = mongoose.model('Board', boardSchema);