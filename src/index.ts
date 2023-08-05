import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import {runDb} from "./repositories/db";
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hi!!!!');
});


export const startApp = async () => {
    await runDb();

    app.listen(process.env.PORT, () => {
        console.log(`start on port ${process.env.PORT}`);
    });
}

startApp();
