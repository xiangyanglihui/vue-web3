const models = require('../config/db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../map/sqlMap')

// connect SQL
const conn = mysql.createConnection(models.mysql)

conn.connect()
const jsonWrite = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: 'fail'
    })
  } else {
    res.json(ret)
  }
}


router.get('/ViewProduct/:page', (req, res) => {
  var sql = $sql.product.view
  var reg = /^[0-9]*$/;
  if(reg.test(req.params.page)){
    var page = (parseInt(req.params.page) - 1) * 20 + 1
    conn.query(sql, [page, 20], (err, result) => {
      if (err) {
        console.log(err)
      }
      if (result) {
        jsonWrite(res, result)
      }
    })
  }
})

module.exports = router
