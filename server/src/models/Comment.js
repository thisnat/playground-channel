const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let commentSchema = new Schema({
    body: {
        type: String
    },
    topicId: {
        type: Number
    },
    commentId: {
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String
    },
    userType: {
        type: String
    }
}, {
    collection: "comment"
})

module.exports = mongoose.model('Comment', commentSchema);