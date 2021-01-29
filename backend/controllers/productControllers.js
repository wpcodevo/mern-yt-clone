import catchAsync from 'express-async-handler'
import Product from '../models/productModel.js'

export const getProducts = catchAsync(async (req, res) => {
  const products = await Product.find()

  res.status(200).json({
    status: 'success',
    data: {
      products,
    },
  })
})

export const getProductById = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('No products found with this Id')
  }

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  })
})
