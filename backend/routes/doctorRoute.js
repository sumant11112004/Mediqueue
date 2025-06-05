import express from 'express'
import { appointmentCancel, appointmentComplete, appointmentsDoctor, doctorDashboard, doctorList, doctorProfile, loginDoctor, updateDoctorProfile } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'
import bodyParser from 'body-parser'
import authorDoctor from '../middlewares/authorDoctor.js'

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded()

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',urlencodedParser, authorDoctor, appointmentComplete )
doctorRouter.post('/cancel-appointment',urlencodedParser,authorDoctor, appointmentCancel)
doctorRouter.post('/update-profile',authorDoctor,updateDoctorProfile)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)
doctorRouter.get('/profile',authDoctor, doctorProfile)

export default doctorRouter