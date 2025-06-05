import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'
import bodyParser from 'body-parser'

// APP CONFIG 
const app = express()
const port = process.env.PORT  || 4000
connectDB()
connectCloudinary()

//MIDDLEWARES

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

//API END POINTS

app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get('/', (req,res)=>{
    res.send('Hello MEDIQUEUE')
})

app.listen(port, ()=> console.log("Server Started", port))
