import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productData from './data/data.js'

process.on('uncaughtException', err => {
  console.log(err.name, err.message)
  process.exit(1)
})

dotenv.config()

const app = express()

// Database
connectDB()

app.get('/api/products', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    products: productData,
  })
})

app.get('/api/products/:id', (req, res, next) => {
  const product = productData.find(p => p._id === req.params.id)
  res.status(200).json({
    status: 'success',
    product,
  })
})

const PORT = process.env.PORT || 5100

const server = app.listen(
  PORT,
  console.log(
    `server started successfully in ${process.env.NODE_ENV} on port: ${PORT}`
  )
)

process.on('unhandledRejection', () => {
  console.log('UNHANDLED REJECTION Shutting down...')
  server.exit(() => {
    process.exit(1)
  })
})
