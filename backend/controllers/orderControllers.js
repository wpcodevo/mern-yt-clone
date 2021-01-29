import catchAsync from 'express-async-handler'
import Order from '../models/orderModel.js'

export const addOrderItems = catchAsync(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    shippingPrice,
    paymentMethod,
    taxPrice,
    itemsPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No Order Items')
    return
  } else {
    const order = await Order.create({
      orderItems,
      shippingAddress,
      shippingPrice,
      paymentMethod,
      taxPrice,
      itemsPrice,
      totalPrice,
      user: req.user._id,
    })

    res.status(201).json(order)
  }
})

export const getOrderById = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.status(200).json(order)
  } else {
    res.status(404)
    throw new Error('Order not Found')
  }
})
