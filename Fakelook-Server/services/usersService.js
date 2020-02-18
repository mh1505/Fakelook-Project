const { dbConnect } = require('../connection/dbSql')
const sql = require('mssql/msnodesqlv8')



const usersService = () => {
    const getAllUsers = function (callback) {
        dbConnect();
        const result = new sql.Request()
            .query('select * from Users',
                function (err, users) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        //var send_data = users.recordset;
                        /* res.json(send_data); */
                        callback(users.recordset);
                    }
                });

    };

    return {
        getAllUsers
    
    }
}

module.exports = usersService();