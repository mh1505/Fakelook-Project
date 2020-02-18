const express = require('express')
const router = express.Router()
const { dbConnect } = require('../connection/dbSql')
const { executeQuery } = require('../connection/dbSql')
const usersService  = require('../services/usersService')
const sql = require('mssql/msnodesqlv8')

router.get('/users', (req, res) => {
    try {
        usersService.getAllUsers((users) => {
            res.json(users)
        });
    } catch (err) {
        console.log(err)
        res.status(500)
        res.send(err.message)
    }
})



module.exports = router;

// router.get('/users', (req, res) => {
//     try {
//         dbConnect();
//         const result = new sql.Request()
//             .query('select * from Users',
//                 function (err, users) {
//                     if (err) {
//                         console.log(err)
//                     }
//                     else {
//                         var send_data = users.recordset;
//                         res.json(send_data);
//                     }
//                 })
//     } catch (err) {
//         console.log(err)
//         res.status(500)
//         res.send(err.message)
//     }
// })