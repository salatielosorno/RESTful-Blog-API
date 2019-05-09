const post = require('./posts')
const comment = require('./comments')
const express = require('express')

const router = express.Router()

router.get('/posts', post.getPosts)
router.post('/posts', post.addPost)
router.put('/posts/:postId', post.updatePost)
router.delete('/posts/:postId', post.removePost)

router.get('/posts/:postId/comments', comment.getComments)
router.post('/posts/:postId/comments', comment.addComment)
router.put('/posts/:postId/comments/:commentId', comment.updateComment)
router.delete('/posts/:postId/comments/:commentId', comment.removeComment)

module.exports = router