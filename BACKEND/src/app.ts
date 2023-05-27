import express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv'
import toListRouter from './routes/toListRouter'
import bodyParser from 'body-parser'

dotenv.config()

const server = express()

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(express.json())

server.use(toListRouter)

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada')
})

export default server