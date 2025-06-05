import express from 'express'
import { addDoctor, adminDashboard, allDoctors, appointmentCancel, appointmentsAdmin, loginAdmin} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailablity } from '../controllers/doctorController.js'
import authorizedAdmin from '../middlewares/authorizedAdmin.js'
import bodyParser from 'body-parser'

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded()

const adminRouter = express.Router()

adminRouter.post('/add-doctor',upload.single('image'),authAdmin,addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',authAdmin, allDoctors)
adminRouter.post('/change-availability',authAdmin, changeAvailablity)
adminRouter.get('/appointments',authorizedAdmin,appointmentsAdmin)
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
adminRouter.get('/dashboard',authorizedAdmin,adminDashboard)

export default adminRouter