import { Router } from 'express'
import compraRoutes from './comprasRoutes.js';
const router = Router()
import userRoutes from './userRoutes.js'


router.use('/usuario', userRoutes);
router.use('/compra',compraRoutes);

export default router;