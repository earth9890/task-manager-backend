import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controller/task.controller.js';

const router = express.Router();

router.get('/api/tasks', getTasks);
router.post('/api/tasks', createTask);
router.put('/api/tasks/:id', updateTask);
router.delete('/api/tasks/:id', deleteTask);

router.get('/', (req, res) => {
	res.send('Hello World!')
})
export default router;
