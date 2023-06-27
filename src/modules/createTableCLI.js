const Table = require('cli-table')

module.exports = async (results) => {
  const tabela = new Table({
    head: Object.keys(results[0]),
  })

  await results.forEach((row) => {
    const values = Object.values(row)
    tabela.push(values)
  })

  return tabela.toString()
}
