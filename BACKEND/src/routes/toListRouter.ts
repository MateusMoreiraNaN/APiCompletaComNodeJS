import { Router } from "express";
import  validatebody  from '../middlewares/tasks'

import * as toList from '../controllers/toListController'

const router = Router()

router.get('/tasks', toList.tasks)
router.post('/task', validatebody, toList.task)
router.get('/task/:id', toList.idTask)
router.delete('/task/:id', toList.deleteId)
router.put('/task/:id', toList.tasksUpdate)


export default router