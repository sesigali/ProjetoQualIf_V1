const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Indice = db.define("indice", {
    idIndice: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ativoCirculante: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    ativoReaLongoPrazo: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    ativoTotal: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    passivoCirculante: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    passivoNaoCirculante: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },

    /**Danilo: serão calculado pela função, quando essa informação for consultada novamente, o irá aparecer?
     * a informação do banco de dados ou o cálculo da função??
     */
    liquidezGeral: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    solvenciaGeral: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    liquidezCorrente: {
        type: Sequelize.DOUBLE,
        allowNull: true
    }
});

module.exports = Indice;
