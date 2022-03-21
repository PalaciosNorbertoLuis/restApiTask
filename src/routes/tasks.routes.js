import { Router } from 'express'
import * as contr from '../controllers/task.controller' 

const router = Router();
router.get('/', contr.findAllTask);

router.post ('/', contr.createTask);

router.get('/:id', contr.fineOneTask);

router.delete('/:id', contr.deleteTask);

router.put('/:id', contr.updateTask);

export default router;