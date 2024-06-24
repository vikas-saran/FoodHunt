// import ErrorHandler from "../middlewares/error.js";
import { OTP } from "../models/otp.js";





const OTPset = async (req, res, next) => {
    let otp=0;
    const authHeader = req.header("Authorization");
    
    // Check if the Authorization header is present and starts with 'Bearer '
    if (authHeader && authHeader.startsWith("Bearer ")) {
        // Extract the OTP from the Authorization header
        otp = authHeader.replace("Bearer ", "");
        console.log("Extracted OTP:", otp);

    } else {
        // If the Authorization header is missing or not properly formatted, return an error
        res.status(400).json({ error: "Invalid or missing Authorization header" });
    }


    const {orderSize,item,totalAmount,email} = req.body;
    try {
    await OTP.create({otp,orderSize,item,totalAmount,email});
    res.status(201).json({
      success: true,
      message: "Otp sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    res.status(500).json({
        success: false,
        message: error.message,
      });
    // Handle other errors
    return next(error);
  }
};


export default OTPset;

