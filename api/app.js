import express from "express"
import cors from "cors"
import postRouter from "./routes/postRouter.js"
import authRouter from "./routes/authRouter.js"
import cookieParser from "cookie-parser"

const PORT = process.env.PORT || 8080

const app = express()

// middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use("/api/posts", postRouter)
app.use("/api/auth", authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})