import express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv'

dotenv.config()

const server = express()


server.listen(process.env.PORT)