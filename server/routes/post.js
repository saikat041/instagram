const express = require('express');
const router = express.Router()

const Post = require('../models/Post')
const User = require('../models/User')
const { getUserIdFromToken } = require('../utils')

router.get('/', async function (req, res, next) {
    try {
        const { error, userId } = getUserIdFromToken(req.cookies.token)
        if (error) {
            return res.status(401).send('Unauthorized request')
        }
        const posts = await Post.find({ userId })
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
        const { username } = await User.findOne({ _id: userId })
        const post = new Post({ userId, username, imageUrl, caption })
        await post.save()
        return res.send("Post added successfully")
    } catch (err) {
        next(err)
    }
});

module.exports = router
