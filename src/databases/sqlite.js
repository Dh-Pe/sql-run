const { open } = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')

const sqlite = async () => {
  const db = await open({
    filename: path.join(__dirname, '../config/sqlite.db'),
    driver: sqlite3.Database,
  })

  let sql = `
      CREATE TABLE IF NOT EXISTS dbconfig (
        user varchar(100) default 'root',
        database varchar(100) default 'sakila',
        password varchar(100) default null,
        host varchar(255) default 'localhost'
      )
    `

  await db.exec(sql)

  return db
}

module.exports = sqlite
