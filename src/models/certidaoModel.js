const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Certidao = db.define("certidao", {
    idCertidao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    certidaoFalencia: {
        type: Sequelize.BLOB,
        allowNull: true
    },
    naturezaCertidao: {
        type: Sequelize.BOOLEAN, 
        allowNull: true
    },
    planoRecuperacao: {
        type: Sequelize.BOOLEAN, 
        allowNull: true
    }
});

module.exports = Certidao;
