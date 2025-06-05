import jwt from 'jsonwebtoken'

//ADMIN AUTHENTICATION FOR MIDDLEWARES FOR GET METHOD

const authorizedAdmin = async(req,res,next)=>{
    try {
        const {atoken}= req.headers
        if (!atoken) {
            return res.json ({success:false, message:'Not Authorized Login Again'})            
        }
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)
        req.body={
            appointmentId:token_decode._id
        }
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json ({success:false, message:'Not Authorized Login Again'})            
        }

        next()        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authorizedAdmin