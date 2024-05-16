import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
export const app = express();

config({
    path:"./data/config.env"
})

const router = express.Router();

// using middlewares
app.use(express.json()); 
app.use(cookieParser);



// using routes
app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouter)


router.get("/", (req, res) => {
    res.send("Nice working");
  });
