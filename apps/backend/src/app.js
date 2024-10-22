import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import atmRouter from './routes/atm.routes.js'

const app = express()

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true 
}))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use('/api', atmRouter)

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found"
  })
})

export default app
