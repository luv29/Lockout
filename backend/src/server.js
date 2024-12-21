import dotenv from "dotenv";
import connectDB from './db/index.js';
import { app } from "./app.js";

const port = process.env.PORT

dotenv.config({
    path: './.env'
})

connectDB().then(()=> {
    app.listen(port, ()=>{
        console.log(`Process is listening on port ${port}`)
    })
}).catch((erro)=> {
    console.log("MONGODB connection error: ", error);
    process.exit(1);
})
