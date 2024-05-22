import { Request, Response, Router } from "express";

const router = Router();

router.get("/", async (req:Request, res:Response) => {
    res.send("Home Page del server")
});

router.get("/contatti", async (req:Request, res:Response) => {
    res.send("Contattaci")
});

router.get("/chi-siamo", async (req:Request, res:Response) => {
    res.send("Siamo solo  noi")
});

export default router;

