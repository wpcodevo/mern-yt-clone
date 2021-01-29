import express from 'express'
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderControllers.js'

import protect from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').patch(protect, updateOrderToPaid)

export default router
