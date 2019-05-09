let store = require('../data/store')
module.exports = {
    getComments(req, res){
        let postId = req.params.postId;

        if(store.posts.length - 1 < postId)
            return res.status(404).send();

        let post = store.posts[postId];
        res.status(200).send(post.comments);
    },
    addComment(req, res){
        let postId = req.params.postId;

        if(store.posts.length - 1 < postId)
            return res.status(404).send()

        let comment = {
            text: req.body.text
        }
        if(!store.posts[postId].comments)
            store.posts[postId].comments = []

        store.posts[postId].comments.push(comment);
        res.status(201).send();
    },
    updateComment(req, res){
        let postId = req.params.postId;

        if(store.posts.length - 1 < postId)
            return res.status(404).send()

        let comments = store.posts[postId].comments;

        let commentId  = req.params.commentId;

        if(!comments)
            return res.status(404).send()
        if(comments.length - 1 < commentId)
            return res.status(404).send()

        comments[commentId] = {
            text: req.body.text
        }

        res.status(204).send();
    },
    removeComment(req, res){
        let postId = req.params.postId;

        if(store.posts.length - 1 < postId)
            return res.status(404).send()

        let comments = store.posts[postId].comments;

        let commentId  = req.params.commentId;

        if(!comments)
            return res.status(404).send()
        if(comments.length - 1 < commentId)
            return res.status(404).send()

        store.posts[postId].comments.splice(commentId, 1);

        res.status(204).send();
    }
}