import { Request, Response } from "express";
import { toList } from "../models/tasksModel";

export const tasks = async(req: Request, res: Response) =>{
    let list = await toList.findAll()


    res.status(200).json(list)
}

export const task = async(req: Request, res: Response)=>{
    let { title, status, created_at } = req.body

    let newTask = await toList.create({
        title, status, created_at
    })

    res.json({id: newTask.id, title, status, created_at})
}

export const idTask = async(req: Request, res: Response)=>{
    let id = req.params.id

    if(isNaN(parseInt(id))){
        res.sendStatus(400)
    }else{
        let id = parseInt(req.params.id)

        let task = await toList.findOne({where:{id: id}})

        if(task != undefined){
            res.statusCode = 200
            res.json({task})
        }else{
            res.sendStatus(404)
        }
    }

}

export const deleteId = async(req: Request, res: Response)=>{
    

    let { id } = req.params

    if(isNaN(parseInt(req.params.id))){
        res.sendStatus(400)

    }else{

        await toList.destroy({
            where:{id}
        })
        //res.sendStatus(200)
        res.json({})
    }
    
}

export const tasksUpdate = async(req: Request, res: Response)=>{
    let { id } = req.params
    let { title, status, created_at } = req.body

    if(isNaN(parseInt(req.params.id))){
        res.sendStatus(400)
    }else{
        let tasksUpdate  = await toList.findByPk(id)

        if(tasksUpdate != undefined){
            tasksUpdate.title = title,
            tasksUpdate.status = status,
            tasksUpdate.created_at = created_at

            await tasksUpdate.save()

        res.json({tasksUpdate})
    }
    }
}