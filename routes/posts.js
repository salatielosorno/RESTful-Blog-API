let store = require('../data/store')
module.exports = {
    getPosts(req, res){
        res.status(200).send(store);
    },
    addPost(req, res){
        let post = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text
        }
        store.posts.push(post)
        res.status(201).send()
    },
    updatePost(req, res){
        if(store.posts.length - 1 < req.params.postId)
            return res.status(404).send()
        
        let post = {
            name: req.body.name,
            url: req.body.url,
            text: req.body.text,
            comments: req.body.comments
        }
        store.posts[req.params.postId] =  post;
        res.status(204).send()
    },
    removePost(req, res){
        if(store.posts.length - 1 < req.params.postId)
            return res.status(404).send()
        
        store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
}