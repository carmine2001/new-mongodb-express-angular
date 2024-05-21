import * as db from "./db";
import express, {Request,Response} from "express";
import { config } from "dotenv";
config();
import morgan from "morgan";


const app = express();
const port = process.env.PORT || 3000;

const main = async () => {
    // console.log(await db.addPost("titolo1","carmine","body1",true));

    // console.log(await db.deletePost("664bbe7a3a2ec5673b9f7b82"));

    // console.log(await db.updatePost("664bbed87a651d2458f9fd26","titolo modificato", "alfo", "body modificato", false));
    
    
    // console.log(await db.getPosts());

    app.use(morgan("dev"));

    app.get("/posts", async (req:Request, res:Response) => {
        res.json(await db.getPosts());
    })

    app.use((req:Request, res:Response) => {
        res.status(404).json("errore nel path");
    })

    app.use((req:Request, res:Response) => {
        res.status(500).json("errore nel server");
    })

    app.listen(port,() => {
        console.log(`Server in ascolto su http://localhost:${port}`);
    })


}

main();