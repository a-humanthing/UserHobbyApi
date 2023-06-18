import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
dotenv.config()
const app = express()
const port = process.env.PORT
const DB_URI = process.env.DB_URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
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
app.get("/", (req, res) => {
  res.json({ "Express + TypeScript Server": true })
})
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
//# sourceMappingURL=index.js.map
