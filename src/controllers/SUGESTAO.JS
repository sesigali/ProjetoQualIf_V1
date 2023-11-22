

application.post("/analise/cadastro", (req res)=>{
    verifica os dados que chegaram, ve se algum é nulo e trata
    EmpresaController.salva(razao, cnpj, ..);
    indiceCOntroller.salva(cnpj, valorA, valorB);

} )

    //recuperar o formulário completo, com todos os dados.

    //em cada controller, criar uma função "cadastraXXX(a, b, c)"
    /*
        ex. cadastraEmpresa(razaoSocial, cnpj, contatoEmpresa, tipoServico, valorEstimadoContrato){
            if (razaoSocial && cnpj && contatoEmpresa && tipoServico && valorEstimadoContrato) {
            await Empresa.sync();
            const empresaEntity = await Empresa.create({
                razaoSocial,
                cnpj,
                contatoEmpresa,
                tipoServico,
                valorEstimadoContrato
            });
        }
    */

    
))