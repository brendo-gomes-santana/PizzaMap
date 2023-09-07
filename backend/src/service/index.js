import mongoose from "mongoose";
import { config } from 'dotenv';

config();

async function main() {
    const { USUARIO, SENHA } =  process.env;

    await mongoose.connect(
        `mongodb+srv://${USUARIO}:${encodeURIComponent(SENHA)}@apicluster.xo2nmvf.mongodb.net/?retryWrites=true&w=majority`
        )
    console.log('Conexão com o banco de dados feito')
}

main().catch((err) => console.log(err))

export default main;