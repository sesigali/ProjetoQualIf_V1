const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Empresa = db.define("empresa", {
    idEmpresa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    razaoSocial: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    contatoEmpresa: {
        type: Sequelize.STRING,
        allowNull: true 
    },
    tipoServico: {
        type: Sequelize.STRING,
        allowNull: true
    },
    valorEstimadoContrato: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },

    /**Perguntar p Danilo: posso fazer isso q está abaixo? relacionamento de FK 
    idCertidao: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: "Certidao",
            key: "idCertidao"
        }
    },
    idComplementacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: "Complementacao",
            key: "idComplementacao"
        }
    },
    idIndice: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: "Indice",
            key: "idIndice"
        }
    },
    idRelatorio: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: "Relatorio",
            key: "idRelatorio"
        }
    },
    idBalanco: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: "Balanco",
            key: "idBalanco"
        }
    },
    idPatrimonioLiquido: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: "PatrimonioLiquido",
            key: "idPatrimonio"
        }
    },
    idCompromisso: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: "Compromisso",
            key: "idCompromisso"
        }
    }*/
});

module.exports = Empresa;
