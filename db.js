const nedb = require('nedb-promises')
const orderDb = nedb.create('orderdb.db')
const userDb = nedb.create('userdb.db')

module.exports = { orderDb, userDb }
