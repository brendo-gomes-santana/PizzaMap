import mongoose from "mongoose";

const Schema = mongoose.Schema

const PizzariaSchema = new Schema({
    nome: { type: String, require: true },
    nome_do_dono: { type: String, require: true },
    email: { type: String, require: true },
    whatsapp: {type: String, require: true},
    cep: {type: String, require: true},
    rua: {type: String, require: true},
    bairro: {type: String, require: true},
    n_do_local: {type: String, require: true},
    foto: {type: String, require: true }
})

export default mongoose.model("Pizzaria", PizzariaSchema);