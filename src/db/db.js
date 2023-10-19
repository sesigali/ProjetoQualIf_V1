const Sequelize = require("sequelize");

// Configurar a conexão com o banco de dados
const sequelize = new Sequelize("projeto_qualif", "root", "admin", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

module.exports = sequelize;
