import express, { Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";

import createConnection from "../typeorm";
import {router} from "./routes";



createConnection()
const app = express();

app.use(express.json())

// app.use("/", router)

app.get('/', (req: Request, res: Response) => {
  res.json({ "message": "hello world with Typescript"})
})

export {app}


