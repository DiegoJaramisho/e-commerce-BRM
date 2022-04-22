import { Router } from 'express'
const router = Router()
import userRoutes from './userRoutes.js'


router.use('/usuario', userRoutes);

export default router;