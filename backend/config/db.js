import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const DB = process.env.MONGODB_URI.replace(
  '<PASSWORD>',
  process.env.MONGODB_PASSWORD
)

const connectDB = async () => {
  const conn = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  console.log(
    `Database conneccted successfully on ${conn.connection.host}`.cyan.underline
      .bold
  )
}

export default connectDB
