import express, { Router, Response, Request } from "express";

import "reflect-metadata"

const router = express()

router.get("/initial",  (req: Request, res: Response) => {
    res.json({"message": "Hello Guys"})
})

export {router}