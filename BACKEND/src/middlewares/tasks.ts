import { Request, Response, NextFunction } from "express";

export default function validatebody(req: Request, res: Response, next: NextFunction){
    const { body } = req

    if(body.title == undefined){
        return res.status(400).json({message: "the field 'title' is required"})
    }

    if(body.title == ''){
        return  res.status(400).json({message: "title cannot be empty"})
    }

    next()

}