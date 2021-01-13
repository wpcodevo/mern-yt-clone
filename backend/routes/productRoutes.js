import express from 'express'
import catchAsync from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

router.get(
  '/',
  catchAsync(async (req, res, next) => {
    const products = await Product.find()

    res.status(200).json({
      status: 'success',
      data: {
        products,
      },
    })

    next()
  })
)

router.get(
  '/:id',
  catchAsync(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
      res.status(404).json({
        status: fail,
        message: 'No products found with this Id',
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    })

    next()
  })
)

export default router
