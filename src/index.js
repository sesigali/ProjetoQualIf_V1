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

app.use("/balancoEntity", require("./controlles/balancoControllers.js"))
app.use("/certidaoEntity", require("./controlles/certidaoController.js"))
app.use("/complementacaoEntity", require("./controlles/complementacaoController.js"))
app.use("/compromissoEntity", require("./controlles/compromissoController.js"))
app.use("/empresaEntity", require("./controlles/empresaController.js"))
app.use("/indiceEntity", require("./controlles/indiceController.js"))
app.use("/patrimonioLiqEntity", require("./controlles/patrimonioLiqController.js"))
app.use("/relatorioEntity", require("./controlles/relatorioController.js"))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
  })