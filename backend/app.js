import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use("/api/v1/reservation", reservationRouter);

// app.get("/", (req, res)=>{return res.status(200).json({
//   
//   message: "HELLO WORLD AGAIN"
// })})

dbConnection();

app.use(errorMiddleware);

app.listen(process.env.PORT, ()=>{
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})

export default app;
