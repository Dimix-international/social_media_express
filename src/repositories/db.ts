import {MongoClient} from "mongodb";
import settings from "../settings";

const client = new MongoClient(`${settings.MONGO_URI}`);

//`mongodb+srv://dimadimix94:WAQsoHZ6KvTQU6Yz@cluster0.xagcbdj.mongodb.net/media-db?retryWrites=true&w=majority`
export async function runDb() {
    try {
        await client.connect();
        console.log('Connected successfully to mongo server!');
    } catch (e) {
        console.log(e)
        await client.close();
    }
}
