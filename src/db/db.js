const Sequelize = require("sequelize");

// Configurar a conexão com o banco de dados
const sequelize = new Sequelize("QualIf", "admin", "admin", {
    host: "localhost",
    dialect: "mysql", 
});

module.exports = sequelize;
