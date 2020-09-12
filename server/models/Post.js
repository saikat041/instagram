const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userId: String,
    imageUrl: String,
    caption: String
})

module.exports = mongoose.model("Post", PostSchema)