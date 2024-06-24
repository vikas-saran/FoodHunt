import mongoose from "mongoose";
import validator from "validator";
import nodemailer from "nodemailer";
import dotenv from "dotenv";



const otpSchema = new mongoose.Schema({
    otp:{
        type:Number,
        require:true
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
      },
    orderSize:{
        type:Number,
      },
    item:{
        type:Array,
      },
    totalAmount:{
        type:Number
      }
});


// post middleware
otpSchema.post("save", async function (doc){
    try {
        console.log("DOC", doc)
  
        // connecting to nodemailer
        //transporter 
        let transporter = nodemailer.createTransport({
                  host: process.env.MAIL_HOST,
                  auth: {
                      user: process.env.MAIL_USER,
                      pass: process.env.MAIL_PASS,
                  },
              });
  
        //send mail 

        let info = await transporter.sendMail({
            from: `foodhunt12262@gmail.com`,
            to: doc.email,
            subject: "OTP for your Cart",
            html: `<h2>Cart size: ${doc.orderSize}</h2>

            <p>OTP to save the cart and place an order : ${doc.otp}</p><p>order of the following item:${doc.item} worth:${doc.totalAmount}</p><br/>
            <p>regards,<p/><p>FOODHUNT</p>
           `,
        });
  
        console.log("INFO of mail", info);
  
  
    }
    catch (error) {
        console.error(error);
    }
  })
  
export const OTP =mongoose.model("OTP",otpSchema);