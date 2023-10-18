const express = require("express");
const app = express();
const port = 8888
const db = require('./db/db');
const cors = require("cors");

app.use(cors()); // permite acesso de qualquer origem
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async() => {
  //await db.sync({force:true}) resetar banco
  await db.sync();
})();

app.use("/balanco", require("./controlles/balancoControllers.js"))
app.use("/certidao", require("./controlles/certidaoController.js"))
app.use("/complementacao", require("./controlles/complementacaoController.js"))
app.use("/compromisso", require("./controlles/compromissoController.js"))
app.use("/empresa", require("./controlles/empresaController.js"))
app.use("/indice", require("./controlles/indiceController.js"))
app.use("/patrimonioLiq", require("./controlles/patrimonioLiqController.js"))
app.use("/relatorio", require("./controlles/relatorioController.js"))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})