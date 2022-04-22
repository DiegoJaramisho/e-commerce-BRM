import {Router} from 'express'
const compraRoutes = Router();
import UsersController from '../controllers/UsersController.js'

compraRoutes.get('/compra', UsersController.get);
compraRoutes.post('/compra',UsersController.create);
compraRoutes.get('/compra/:id');
compraRoutes.put('/compra/:id', UsersController.edit);
compraRoutes.delete('/compra/:id', UsersController.destroy);

export default compraRoutes 