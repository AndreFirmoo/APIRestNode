const mysql = require(`mysql`)

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin123",
    database: "agenda-petshop"
})

module.exports = conexao