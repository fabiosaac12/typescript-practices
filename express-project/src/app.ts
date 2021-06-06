import express, { json } from 'express';
import { todosRoutes } from './routes';

const app = express();

app.use(json());
app.use('/todos', todosRoutes);

app.listen(3000);
