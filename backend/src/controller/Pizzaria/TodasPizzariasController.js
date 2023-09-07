import Pizzaria from "../../models/Pizzaria";

async function TodasAsPizzariasController(req, res){
    try{

        const pizzaria = await Pizzaria.find();

        res.json(pizzaria);

    }catch{
        res.status(500).json({error: "Algo ocorreu de errado!"})
    }
}

export default TodasAsPizzariasController;