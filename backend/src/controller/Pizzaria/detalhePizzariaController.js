import Pizzaria from "../../models/Pizzaria";

async function detalhePizzaariaController(req, res){
    try{
        const id = req.params.id;

        const pizzaria = await Pizzaria.findById(id);

        if(!pizzaria){
            return res.status(404).json({mesagem: 'Não existe essa pizzaria'});
        }


        res.json(pizzaria);

    }catch(err){
        res.status(500).json({error: 'Algo deu errado'})
    }

}

export default detalhePizzaariaController;