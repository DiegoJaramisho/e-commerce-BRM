import {Router} from 'express'
const userRoutes = Router();
import UsersController from '../controllers/UsersController.js'

userRoutes.get('/user', UsersController.get);
userRoutes.post('/user',UsersController.create);
userRoutes.get('/user/:id');
userRoutes.put('/user/:id', UsersController.edit);
userRoutes.delete('/user/:id', UsersController.destroy);

export default userRoutes