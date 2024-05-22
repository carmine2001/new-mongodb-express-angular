import express, {Request,Response} from "express";
import { config } from "dotenv";
config();
import morgan from "morgan";
import indexRouter from "./routes/index";
import blogRouter from "./routes/blog";


const app = express();
const port = process.env.PORT || 3000;

const main = async () => {

    app.use(morgan("dev"));

    // middleware che converte in json il body di tutte le richieste che hanno
    // Content-Type: application/json
    app.use(express.json());

    app.use("/", indexRouter);
    app.use("/api/blog", blogRouter);

    app.use((req:Request, res:Response) => {
        res.status(404).json({message: "errore nel path"});
    })

    app.use((req:Request, res:Response) => {
        res.status(500).json({message: "errore nel server"});
    })

    app.listen(port,() => {
        console.log(`Server in ascolto su http://localhost:${port}`);
    })


}

main();