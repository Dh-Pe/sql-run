const { build } = require('gluegun')

async function run(argv) {
  const cli = build()
    .brand('sql-run')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'sql-run-*', hidden: true })
    .help()
    .version()
    .create()
  const toolbox = await cli.run(argv)
  return toolbox
}

module.exports = { run }
