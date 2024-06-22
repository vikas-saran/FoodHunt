import mongoose from "mongoose";

const cartSchema={
  orderSize:{
    type:Number,
  },
  item:{
    type:Array,
  },
  totalAmount:{
    type:Number
  }
}

export const Cart=mongoose.model("Cart",cartSchema);
