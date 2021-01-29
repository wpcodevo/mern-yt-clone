import express from 'express'
import { addOrderItems, getOrderById } from '../controllers/orderControllers.js'

import protect from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)

export default router
