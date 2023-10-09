const Indice = require("../models/index").Indice;
const router = require("express").Router();

//Cadastrar Indice
router.post('/indice/adicionar', async (req, res) => {
    try {
        const {
            ativoCirculante,
            ativoReaLongoPrazo,
            ativoTotal,
            passivoCirculante,
            passivoNaoCirculante,
            idEmpresa
        } = req.body;

        if (idEmpresa != null) {
            await Indice.sync();
            const indiceEntity = await Indice.create({
                ativoCirculante,
                ativoReaLongoPrazo,
                ativoTotal,
                passivoCirculante,
                passivoNaoCirculante,
                idEmpresa
            });
            res.status(201).json(indiceEntity);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar um Índice por ID
router.get('/indice/listarindice/:id', async (req, res) => {
    try {
        await Indice.sync();
        const indiceEntity = await Indice.findOne({
            where: { idIndice: req.params.id }
        });
        res.json(indiceEntity);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Excluir um Índice por ID
router.delete('/indice/excluir/:id', async (req, res) => {
    try {
        await Indice.sync();
        await Indice.destroy({
            where: { idIndice: req.params.id }
        });
        res.send(`Índice ${req.params.id} excluído!`);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Editar um Índice por ID
router.put('/indice/editar/:id', async (req, res) => {
    try {
        const {
            ativoCirculante,
            ativoReaLongoPrazo,
            ativoTotal,
            passivoCirculante,
            passivoNaoCirculante,
            idEmpresa
        } = req.body;

        if (idEmpresa != null) {
            await Indice.sync();
            await Indice.update({
                ativoCirculante,
                ativoReaLongoPrazo,
                ativoTotal,
                passivoCirculante,
                passivoNaoCirculante,
                idEmpresa
            }, {
                where: { idIndice: req.params.id }
            });
            res.send(`Índice ${req.params.id} editado!`);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});
