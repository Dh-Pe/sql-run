# sql-run CLI

CLI SGBD MySQL via linha de comando.

## Instalação

- Necessário instalar de forma global

```shell
# Via npm
$ npm install sql-run -g

# Via yarn
$ yarn global add sql-run
```

## Utilização

```shell
# Criar conexão
$ sql-run config -u <user> -p <password> -db <banco de dados> -h <host>

# Executar Query
$ sql-run "<sql>";
```

## Exemplo

```shell
# Criar conexão
$ sql-run config -u root -p 123456 -db loja -h localhost

# Executar Query
$ sql-run "create table produtos (nome varchar(20), preco float)";
$ sql-run "insert into produtos (nome, preco) values ('Camisa', 20.0)";
$ sql-run "select * from produtos";

# Output: [ { nome: 'Camisa', preco 20 } ]
```

## Última atualização

- Nova forma de visualização via, com tabelas utilizando [cli-table](https://www.npmjs.com/package/cli-table)
- Nova funcionalidade para alterar o Host (que antes era só localhost)
- Corrigido o erro crítico do arquivo SQLite não ser criado na raiz do projeto
- Correção de bugs

# License

MIT - see LICENSE

