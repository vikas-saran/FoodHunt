// import ErrorHandler from "../middlewares/error.js";
import { Cart } from "../models/cart.js";

const cartMaker = async (req, res, next) => {
  const {orderSize,item,totalAmount} = req.body;

  try {
    await Cart.create({orderSize,item,totalAmount });
    res.status(201).json({
      success: true,
      message: "Cart sent Successfully!",
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


export default cartMaker;

