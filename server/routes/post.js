const express = require('express');
const router = express.Router()

const Post = require('../models/Post')
const { getUserIdFromToken } = require('../utils')

router.get('/', async function (req, res, next) {
    try {
        const posts = await Post.find({})
        res.send({ posts })
    } catch (err) {
        next(err)
    }
});

router.post('/', async function (req, res, next) {
    try {
        const { imageUrl, caption } = req.body
        const { error, userId } = getUserIdFromToken(req.cookies.token)
        if (error) {
            
            return res.status(401).send('Unauthorized request')
        }
        const post = new Post({ userId, imageUrl, caption })
        const savedPost = await post.save()
        return res.send({ postId: savedPost.id })
    } catch (err) {
        next(err)
    }
});

module.exports = router
