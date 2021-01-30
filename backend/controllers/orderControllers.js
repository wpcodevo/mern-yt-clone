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

export const updateOrderToPaid = catchAsync(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()
    res.status(200).json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not Found')
  }
})

export const getMyOrders = catchAsync(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })

  res.status(200).json(orders)
})
