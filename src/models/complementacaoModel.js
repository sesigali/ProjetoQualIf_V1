const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Complementacao = db.define("complementacao", {
    idComplementacao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    comprAssumidos: {
        type: Sequelize.DOUBLE, 
        allowNull: true
    },
   /* capitalGiroouCcl: {
        type: Sequelize.DOUBLE, 
        allowNull: true
    },
    umDozeContrato: {
        type: Sequelize.DOUBLE, 
        allowNull: true
    }*/
});

module.exports = Complementacao;
