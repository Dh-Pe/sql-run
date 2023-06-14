const mysqlInstance = require('../databases/mysql.js')

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

      mysql.query(sql, (err, results) => {
        if (err) {
          print.error('SQL inválida')
        } else {
          print.success('Query executada com sucesso')
          print.info(results)
        }
      })

      mysql.end()
    }
  },
}

module.exports = command
