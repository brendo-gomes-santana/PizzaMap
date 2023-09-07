import { Router } from "express";
import upload from "./config/multer";

import createPizzariaController from "./controller/Pizzaria/createPizzariaController";
import TodasAsPizzariasController from "./controller/Pizzaria/TodasPizzariasController";
import detalhePizzaariaController from "./controller/Pizzaria/detalhePizzariaController";

const routes = Router();

routes.post('/criar/pizzaria', upload.single("foto"),createPizzariaController);
routes.get('/todas/pizzaria', TodasAsPizzariasController);
routes.get('/pizzaria/:id', detalhePizzaariaController);

export default routes;