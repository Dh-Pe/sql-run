const mysqlInstance = require('../databases/mysql.js')
const createTableCLI = require('../modules/createTableCLI.js')

const command = {
  name: 'sql-run',
  run: async (toolbox) => {
    const { print, parameters } = toolbox

    const dadosArray = parameters.array
    if (dadosArray.length <= 0) {
      return print.error('Nenhuma SQL foi atribuída')
    } else {
      const mysql = await mysqlInstance()
      const sql = dadosArray.join(' ')

      mysql.query(sql, async (err, results) => {
        if (err) {
          print.error('SQL inválida')
        } else {
          print.success('Query executada com sucesso')
          print.info(await createTableCLI(results))
        }
      })

      mysql.end()
    }
  },
}

module.exports = command
