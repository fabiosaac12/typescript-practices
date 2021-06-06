import { Router } from 'express';
import { todosDelete, todosGet, todosPatch, todosPost } from '../controllers';

export const todosRoutes = Router();

todosRoutes.get('/', todosGet);

todosRoutes.post('/', todosPost);

todosRoutes.patch('/:id', todosPatch);

todosRoutes.delete('/:id', todosDelete);
