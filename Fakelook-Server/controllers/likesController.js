const likesService = require('../services/likesService')


const likesController = () => {

    const getLikesPostByPostId = (req, res) => {
        try {
            likesService.getLikesPostByPostId(req.params.id, (data) => {
                res.json(data)
            })
        } catch (err) {
            console.log(err)
            res.status(500)
            res.send(err.message)
        }
    }

    return {
        getLikesPostByPostId
    };
}

module.exports = likesController;
