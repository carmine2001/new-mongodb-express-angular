import { config } from "dotenv";
config();
import mongoose from "mongoose";

const connectionString = process.env.MONGODB_STRING_CONNECTION;

interface IPost {
    title: string,
    author: string,
    body: string,
    date: Date,
    hidden: boolean
}

const schemaPost = new mongoose.Schema<IPost>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, defaul: Date.now() },
    hidden: { type: Boolean, default: true }
});

const Post = mongoose.model<IPost>("Post", schemaPost, "posts");


export const addPost = async (title: string, author: string, body: string, hidden: boolean) => {

    try {

        await mongoose.connect(connectionString!, { dbName: "blog" });

        const post = new Post({
            title,
            author,
            body,
            hidden
        })

        return await post.save();

    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}



export const getPosts = async () => {

    try {
        await mongoose.connect(connectionString!, { dbName: "blog" });

        return await Post.find();

    } catch (error) {
        console.log(error);

    } finally {
        await mongoose.disconnect();
    }
}


export const deletePost = async (id: string) => {

    try {

        await mongoose.connect(connectionString!, { dbName: "blog" });

        return await Post.findByIdAndDelete(id);


    } catch (error) {
        console.log(error);

    } finally {
        await mongoose.disconnect();
    }
}


export const updatePost = async (id: string, title: string, author: string, body: string, hidden: boolean) => {

    try {

        await mongoose.connect(connectionString!, { dbName: "blog" });

        return await Post.findByIdAndUpdate(
            { _id: id },
            {
                title,
                author,
                body,
                hidden
            }
        );


    } catch (error) {
        console.log(error);

    } finally {
        await mongoose.disconnect();
    }
}