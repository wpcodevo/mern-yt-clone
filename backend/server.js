import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import connectDB from './config/db.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'

process.on('uncaughtException', err => {
  console.log(err.name, err.message)
  process.exit(1)
})

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// MiddleWares
app.use(express.json())

// Database
connectDB()

// Routes
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const server = app.listen(
  PORT,
  console.log(
    `server started successfully in ${process.env.NODE_ENV} on port: ${PORT}`
      .underline.bold.yellow
  )
)

process.on('unhandledRejection', () => {
  console.log('UNHANDLED REJECTION Shutting down...'.underline.bold.red)
  server.close(() => {
    process.exit(1)
  })
})
