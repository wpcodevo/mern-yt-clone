import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `server started successfully in ${process.env.NODE_ENV} on port: ${PORT}`
  )
)
