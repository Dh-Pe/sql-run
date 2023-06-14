const mysql2 = require('mysql2')
const sqliteInstance = require('./sqlite.js')

const mysql = async () => {
  const sqlite = await sqliteInstance()
  const result = await sqlite.get('SELECT * FROM dbconfig')
  const connection = mysql2.createConnection({
    host: 'localhost',
    user: result.user,
    database: result.database,
    password: result.password,
  })

  sqlite.close()

  return connection
}

module.exports = mysql
