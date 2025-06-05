import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"
import userModel from "../models/userModel.js"

 // API FOR ADDING DOCTOR

const addDoctor = async (req,res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file
        if (!name || !email || !password || !speciality || !degree || !experience || !fees || !address || !about){
            return res.json({success:false, message:"Missing Details" })
        }
       //EMAIL VALIDATION 
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid Email" })
        }
        
        //PASSWORD VALIDATION
        if (password.length < 8){
            return res.json({success:false, message:"Please enter a strong password" })
        }
        //HASHING DOCTOR PASSWORD
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)    
        //UPLOADING IMAGE ON CLOUDINARY
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"auto"})
        const imageUrl = imageUpload.secure_url
        const doctorData = {
            name,
            email,
            about,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            image:imageUrl,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        res.json({success:true, message:"Doctor Added"})

    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

//API FOR ADMIN LOGIN

const loginAdmin = async(req,res)=> {
    try {
        const {email,password} = req.body        
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true,token})            
        } else{
            res.json({success:false,message: "Invalid Credentials"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})        
    }
}

//API TO GET DOCTOR LIST FOR ADMIN PANEL

const allDoctors = async (req,res)=>{
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})       
    }
}

//  API TO GET ALL APPOINTMENTLISTS

const appointmentsAdmin = async (req, res) => {
    try {
        const { appointmentId } = req.body
        const appointments = await appointmentModel.find({ appointmentId })
        console.log(appointments);
        res.json({ success: true, appointments })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//API FOR APPOINTMENT CANCELLATION

const appointmentCancel = async (req, res) => {
    try {
        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
        //RELEASING DOCTOR SLOT
        const { docId, slotDate, slotTime } = appointmentData
        const doctorData = await doctorModel.findById(docId)
        let slots_booked = doctorData.slots_booked
        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)
        await doctorModel.findByIdAndUpdate(docId, { slots_booked })
        res.json({ success: true, message: "Appointment Canceled" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//API TO GET DASHBOARD DATA FOR ADMIN PANEL

const adminDashboard = async(req,res)=>{
    try {
        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})        
        const dashData ={
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointment : appointments.reverse().slice(0,5)
        }
        res.json({success:true, dashData})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addDoctor , loginAdmin, allDoctors, appointmentsAdmin, appointmentCancel, adminDashboard}