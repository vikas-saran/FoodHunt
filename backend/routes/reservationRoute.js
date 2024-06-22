import express from "express";
import send_reservation from "../controller/reservation.js";
import cartMaker from "../controller/cart.js";
 
const router = express.Router();
 
router.post("/send", send_reservation);
router.post("/cart", cartMaker);

export default router;
