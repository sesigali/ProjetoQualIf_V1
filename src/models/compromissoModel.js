const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Compromisso = db.define("compromisso", {
    idCompromisso: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    /*comprAssumidos: {
        type: Sequelize.DOUBLE, 
        allowNull: true
    },*/
    receitaBruta: {
        type: Sequelize.DOUBLE, 
        allowNull: true
    },
    declaracaoCompr: {
        type: Sequelize.BOOLEAN, 
        allowNull: true
    },
    dre: {
        type: Sequelize.BLOB, 
        allowNull: true
    },
    justificativa: {
        type: Sequelize.BOOLEAN, 
        allowNull: true
    }
});

module.exports = Compromisso;
