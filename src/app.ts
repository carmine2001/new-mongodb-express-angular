import * as db from "./db";

const main = async () => {
    // console.log(await db.addPost("titolo1","carmine","body1",true));

    // console.log(await db.deletePost("664bbe7a3a2ec5673b9f7b82"));

    // console.log(await db.updatePost("664bbed87a651d2458f9fd26","titolo modificato", "alfo", "body modificato", false));
    
    
    console.log(await db.getPosts());
}

main();