import mongoose from "mongoose";
import validator from "validator";

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


//post middleware
reservationSchema.post("save", async function(doc){
  try{
    console.log(doc);
  }
  catch(error){
    console.log("error occured while sending the reservation mail",error.message);
  }
});


export const Reservation = mongoose.model("Reservation", reservationSchema);
