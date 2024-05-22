import { IPost } from "../db"

export interface IPostSendClient {
    id:string,
    title:string,
    author:string,
    body:string,
    hidden:boolean,
    date: number
}

export const convertePost = (post:IPost):IPostSendClient => {
    const p:IPostSendClient = {
        id: post.id,
        title: post.title,
        body: post.body,
        author: post.author,
        hidden: post.hidden,
        date: +post.date // aggungere .getTime() e sistemare bag sulla risposta al client
    }
    return p;
}