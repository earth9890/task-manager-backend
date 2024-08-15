import Task from '../models/task.models.js'

export const getTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		res.json(tasks);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const hello = async (req, res) => {
	res.send('Hello World!')
}

export const createTask = async (req, res) => {
	try {
		const { title, description } = req.body;
		const newTask = new Task({ title, description });
		await newTask.save();
		res.status(201).json(newTask);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};


export const updateTask = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
		res.json(updatedTask);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		await Task.findByIdAndDelete(id);
		res.status(204).end();
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
