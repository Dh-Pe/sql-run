const sqliteInstance = require('../databases/sqlite')

const command = {
  name: 'config',
  run: async (toolbox) => {
    const { print, parameters } = toolbox

    const args = parameters.argv.slice(3)

    const sqlite = await sqliteInstance()

    let sql = `SELECT COUNT(*) FROM dbconfig`

    const ifExistsSQL = await sqlite.get(sql)

    const ifExists = ifExistsSQL['COUNT(*)']

    if (ifExists == 0) {
      sql = `INSERT INTO dbconfig (password) VALUES (null)`
      await sqlite.exec(sql)
    }

    const invalidValues = ['-u', '-db', '-p', '-h']

    let findUser = await args.find((arg) => arg == '-u')
    let findDatabase = await args.find((arg) => arg == '-db')
    let findPassword = await args.find((arg) => arg == '-p')
    let findHost = await args.find((arg) => arg == '-h')

    if (findUser) {
      let positionValue = args.indexOf(findUser) + 1

      if (
        !args[positionValue] ||
        invalidValues.includes(args[positionValue]) ||
        args[positionValue].toString().trim() == ''
      ) {
        print.error('Usuário inválido')
      } else {
        sql = `UPDATE dbconfig SET user = '${args[positionValue]}'`
        await sqlite.run(sql)
        print.success('Usuário alterado')
      }
    }

    if (findDatabase) {
      let positionValue = args.indexOf(findDatabase) + 1

      if (
        !args[positionValue] ||
        invalidValues.includes(args[positionValue]) ||
        args[positionValue].trim() == ''
      ) {
        print.error('Database inválida')
      } else {
        sql = `UPDATE dbconfig SET database = '${args[positionValue]}'`
        await sqlite.run(sql)
        print.success('Database alterada')
      }
    }

    if (findPassword) {
      let positionValue = args.indexOf(findPassword) + 1

      if (
        !args[positionValue] ||
        invalidValues.includes(args[positionValue]) ||
        args[positionValue].toString().trim() == ''
      ) {
        print.error('Password inválida')
      } else {
        sql = `UPDATE dbconfig SET password = '${args[positionValue]}'`
        await sqlite.run(sql)
        print.success('Senha alterada')
      }
    }

    if (findHost) {
      let positionValue = args.indexOf(findHost) + 1

      if (
        !args[positionValue] ||
        invalidValues.includes(args[positionValue]) ||
        args[positionValue].toString().trim() == ''
      ) {
        print.error('Host inválido')
      } else {
        sql = `UPDATE dbconfig SET host = '${args[positionValue]}'`
        await sqlite.run(sql)
        print.success('Host alterado')
      }
    }

    sqlite.close()
  },
}

module.exports = command
