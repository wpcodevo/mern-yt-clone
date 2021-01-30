import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userControllers.js'
import protect from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router.post('/login', authUser)

export default router
