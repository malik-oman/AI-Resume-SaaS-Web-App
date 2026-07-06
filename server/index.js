import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.route.js'
import interviewRouter from './routes/interview.route.js'
dotenv.config()


// ============================= MIDDLEWARS ========================================
const app = express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
// =========================================================================


const PORT = process.env.PORT 

// API END POINTS==================================================================

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)


// LISTEN PORT======================================================================
app.listen(PORT,()=>{
    console.log(`Server runing on ${PORT}`)
    connectDB()
})