import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/task.routes.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);

	mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
		.then(() => console.log('MongoDB connected'))
		.catch(err => console.error(err));
});