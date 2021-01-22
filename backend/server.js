import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
// import { notFound, errorHandler } from './middlewares/errorMiddleware.js'

process.on('uncaughtException', err => {
  console.log(err.name, err.message)
  process.exit(1)
})

dotenv.config()

const app = express()

app.use(express.json())

// Database
connectDB()

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

// app.use(notFound)
// app.use(errorHandler)

const PORT = process.env.PORT || 5100

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
