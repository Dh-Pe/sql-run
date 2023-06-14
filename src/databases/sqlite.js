const { open } = require('sqlite')
const sqlite3 = require('sqlite3')

const sqlite = async () => {
  const db = await open({
    filename: 'sqlite.db',
    driver: sqlite3.Database,
  })

  let sql = `
      CREATE TABLE IF NOT EXISTS dbconfig (
        user varchar(100),
        database varchar(100),
        password varchar(100)
      )
    `

  await db.exec(sql)

  return db
}

module.exports = sqlite
