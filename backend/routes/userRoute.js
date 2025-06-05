import express from 'express'
import { registerUser, loginUser, updateProfile, getProfile, bookAppointment, listAppointment, cancelAppointment, paymentRazorpay, verifyRazorpay } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'
import bodyParser from 'body-parser'
import authorizedUser from '../middlewares/authorizedUser.js'

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded()

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/get-profile',authorizedUser, getProfile)
userRouter.post('/update-profile',urlencodedParser, upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/myappointment',authorizedUser,authUser,listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)
userRouter.post('/payment-razorpay', authUser, paymentRazorpay)
userRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default userRouter

