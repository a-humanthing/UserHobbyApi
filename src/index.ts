import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import mongoose, { ConnectOptions } from "mongoose"
import cors from "cors"
import hobbyRoute from "../routes/hobbyRoutes.js"
import userRoute from "../routes/userRoutes.js"

dotenv.config()

const app: Express = express()
const port = process.env.PORT
const DB_URI = process.env.DB_URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions

mongoose
  .connect(DB_URI, options)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error)
  })

app.use(express.json())
app.use(cors())

app.use("/hobby", hobbyRoute)
app.use("/user", userRoute)
app.get("/", (req: Request, res: Response) => {
  res.json({ "Express + TypeScript Server": true })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
