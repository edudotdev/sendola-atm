import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/api', (req, res) => {
  res.json({
      status: "success",
      error: null,
      data:{
        "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com"
      }
    }
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found"
  })
})

export default app