import Razorpay from "razorpay";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default razorpay;
