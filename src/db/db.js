const Sequelize = require("sequelize");

// Configurar a conexão com o banco de dados
const sequelize = new Sequelize("projeto_qualif", "root", "123@Mudar", {
    //host: "localhost",
    host: "35.224.215.100",
    dialect: "mysql",
    logging: false
});

module.exports = sequelize;
