import mongoose from "mongoose";
import validator from "validator";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 Characters."],
    maxLength: [30, "Last name cannot exceed 30 Characters."],
  },
  date: {
    type: String,
    default:Date.now()
  },
  time: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    minLength: [10, "Phone number must be of at least 10 Digits."]
  
  },
});


// post middleware
reservationSchema.post("save", async function (doc) {
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
      const seatNumber=Math.floor(Math.random()*100);

      let info = await transporter.sendMail({
          from: `foodhunt12262@gmail.com`,
          to: doc.email,
          subject: "Your Reservation has been successful",
          html: `<h2>Hello ${doc.firstName} ${doc.lastName} </h2> 
          <p>Your Reservation has been successful at the following Table_number : ${seatNumber}</p>
          <br/><br/>
          <p>regards,FOODHUNT</p>
         `,
      });

      console.log("INFO of mail", info);


  }
  catch (error) {
      console.error(error);
  }
})

export const Reservation = mongoose.model("Reservation", reservationSchema);
