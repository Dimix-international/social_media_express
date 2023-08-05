import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import {runDb} from "./repositories/db";
import {blogsRouter} from "./routes/blogsRouter";
import {postsRouter} from "./routes/postsRouter";
import {testingAllDataRouter} from "./routes/testingAllDataRouter";
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/blogs', blogsRouter);
app.use('/posts', postsRouter);
app.use('/testing/all-data', testingAllDataRouter);

export const startApp = async () => {
    await runDb();

    app.listen(process.env.PORT, () => {
        console.log(`start on port ${process.env.PORT}`);
    });
}

startApp();
