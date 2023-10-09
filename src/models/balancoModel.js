const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Balanco = db.define("balanco", {
    idBalanca: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    balanco: {
        type: Sequelize.BLOB, 
        allowNull: true
    },
    conformidadeLei: {
        type: Sequelize.BOOLEAN, 
        allowNull: true
    }
});

module.exports = Balanco;
