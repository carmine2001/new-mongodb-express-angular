import { Request, Response, Router } from "express";
import * as db from "../db";
import { convertePost } from "../models/post";

const router = Router();

router.get("/", async (req:Request, res:Response) => {
    const posts = await db.getPosts()
    res.json(posts?.map(r => convertePost(r)));
});

router.post("/", async (req:Request, res:Response) => {
    try {
        const newPost:db.IPost = req.body
        await db.addPost(newPost.title, newPost.author, newPost.body,newPost.hidden);
        res.json(convertePost(newPost));
        
    } catch (error) {
        console.error(error);
    }
});

export default router;