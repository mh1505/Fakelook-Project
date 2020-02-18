const { dbConnect } = require('../connection/dbSql')
const sql = require('mssql/msnodesqlv8')

const postsService = () => {
    const getAllPosts = function (callback) {
        dbConnect();
        const result = new sql.Request()
            .execute("GetAllPostsWithUserName",
                function (err, data) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        callback(data.recordset);
                    }
                });
    }

    const getPostById = function (id, callback) {
        dbConnect();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        const result = new sql.Request()
            .input("Id", sql.Int, id)
            .execute("GetPostById",
                function (err, data) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(data.recordset);
                        callback(data.recordset);

                    }
                });
    }

    return {
        getAllPosts,
        getPostById
    }
};

module.exports = postsService();