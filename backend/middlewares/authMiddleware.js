import User from "../models/userModel.js";

const verifyUser = async (req,res,next) => {
    try{
        const token = req.headers.authorization.split('')[1];
        if(!token){
            return res.status(404).json({success: false,
            error: "Token not provided"})
        }
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET)
        if(!decoded){
            return res.status(404).json({success: false,
                error: "Token not valid"})
        }
        const user = await User.findById({_id: decoded._id}).select("-password")
        if(!user){
            return res.status(404).json({success: false,
                error: "User not found"})
        }
        req.user = user
        next()
    }
    catch(err){
        console.log(err);
    }
}

export default verifyUser