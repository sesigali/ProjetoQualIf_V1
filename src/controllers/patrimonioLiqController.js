const PatrimonioLiq = require("../models/index").PatrimonioLiq;
const router = require("express").Router();

//Cadastrar Patrimônio Líquido
router.post('/patrimonioliq/adicionar', async (req, res) => {
    try {
        const { patrimonioLiquido, idEmpresa } = req.body;

        if (idEmpresa != null && patrimonioLiquido != null) {
            await PatrimonioLiq.sync();
            const patrimonioLiqEntity = await PatrimonioLiq.create({
                patrimonioLiquido,
                idEmpresa
            });
            res.status(201).json(patrimonioLiqEntity);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar um Patrimônio Líquido por ID
router.get('/patrimonioliq/listarpatrimonioliq/:id', async (req, res) => {
    try {
        await PatrimonioLiq.sync();
        const patrimonioLiqEntity = await PatrimonioLiq.findOne({
            where: { idPatrimonio: req.params.id }
        });
        res.json(patrimonioLiqEntity);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Excluir um Patrimônio Líquido por ID
router.delete('/patrimonioliq/excluir/:id', async (req, res) => {
    try {
        await PatrimonioLiq.sync();
        await PatrimonioLiq.destroy({
            where: { idPatrimonio: req.params.id }
        });
        res.send(`Patrimônio Líquido ${req.params.id} excluído!`);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Editar um Patrimônio Líquido por ID
router.put('/patrimonioliq/editar/:id', async (req, res) => {
    try {
        const { patrimonioLiquido, idEmpresa } = req.body;

        if (idEmpresa != null && patrimonioLiquido != null) {
            await PatrimonioLiq.sync();
            await PatrimonioLiq.update({
                patrimonioLiquido,
                idEmpresa
            }, {
                where: { idPatrimonio: req.params.id }
            });
            res.send(`Patrimônio Líquido ${req.params.id} editado!`);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

module.exports = router;