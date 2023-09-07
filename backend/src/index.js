import express from "express";
import { config } from "dotenv";
import './service';
import 'express-async-errors';

import routes from "./routes";
config();
const app = express();

app.use(express.json());


app.use(routes);

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        res.status(403);
        res.json({ error: err.message });
    }

    next(err);
});


app.listen(3333, () => {
    console.log('Sistema online')
})