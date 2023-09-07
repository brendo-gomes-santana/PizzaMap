import Pizzaria from "../../models/Pizzaria";
async function createPizzariaController(req, res) {
    try {
        const { nome, nome_do_dono, email, whatsapp, cep, rua, bairro, n_do_local } = req.body;
        const file = req.file;

        const pizzaria = new Pizzaria({
            nome,
            nome_do_dono,
            email, 
            whatsapp, 
            cep, 
            rua, 
            bairro, 
            n_do_local,
            foto: file.path
        }) 

        await pizzaria.save();

        res.json({pizzaria, mensagem: "Pizzaria cadastrar com sucesso"})
    } catch (err) {
        res.status(500).json({error: 'Algo deu errado'})
    }


}

export default createPizzariaController;