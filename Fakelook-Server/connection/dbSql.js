const sql = require('mssql/msnodesqlv8')

const dbConfig = {
    server: "(localdb)\\FakelookLocalDb",
    database: "FakelookSqlDb",
    driver: "msnodesqlv8"
}


function dbConnect() {
    sql.connect(dbConfig);
    console.log('Connected to MSSQL')
};


const executeQuery = function (res, procedure) {
    sql.connect(dbConfig)
    console.log('Connected to MSSQL')
        .then(pool => {
            return pool.request().execute(procedure)
        }).then(result => {
            res.json(result.recordset);
        }).catch(err => {
            res.json(err);
        });
}



module.exports = {
    sql, dbConnect, executeQuery
}
