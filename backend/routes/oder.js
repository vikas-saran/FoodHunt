import express from "express";
import cartMaker from "../controller/cart.js";
import OTPset from "../controller/otp.js";

const router = express.Router();
 
router.post("/cart", cartMaker);
router.post("/otp",OTPset);


export default router;
