const postsService = require('../services/postsService')


const postsController = () => {
    const getAllPosts = (req, res) => {
        try {
            postsService.getAllPosts((data) => {
                res.json(data)
            })
        } catch (err) {
            console.log(err)
            res.status(500)
            res.send(err.message)
        }
    }

    const getPostById = (req, res) => {
        try {
            postsService.getPostById(req.params.id, (data) => {
                res.json(data)
            })
        } catch (err) {
            console.log(err)
            res.status(500)
            res.send(err.message)
        }
    }

    return {
        getAllPosts,
        getPostById
    };
}

module.exports = postsController;

