
const postsRoutes = {
    'GET /posts': "postsController.getAllPosts",
    'GET /posts/:id': "postsController.getPostById",
    'GET /posts/:id/likes': "likesController.getLikesPostByPostId",
    'GET /posts/:id/comments': "commentsController.getCommentsByPostId",
    'GET /posts/:id/tags': "tagsController.getTagsPostByPostId",
    'GET /posts/:id/mentions': "mentionsController.getTagsUsersPostByPostId"
};

module.exports = postsRoutes;