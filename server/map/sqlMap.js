// sql
const sqlMap = {
  product: {
    view: 'SELECT * FROM `products` ORDER BY `updated_at` limit ?,?'
  }
}

module.exports = sqlMap