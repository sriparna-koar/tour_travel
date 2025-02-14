const Razorpay = require('razorpay');
const Payment = require('../models/Payment');
const crypto = require('crypto');
require('dotenv').config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create an order
exports.createOrder = async (req, res) => {
  try {
    const { hotelId, amount } = req.body;

    const options = {
      amount: amount * 100, // Razorpay accepts amounts in paise
      currency: 'INR',
      receipt: `order_rcptid_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Save payment details to DB
    const payment = new Payment({
      hotelId,
    //   userId,
      amount,
      currency: 'INR',
      razorpayOrderId: order.id,
      paymentStatus: 'Pending',
    });

    await payment.save();

    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Verify payment
exports.verifyPayment = async (req, res) => {
  try {
    const { orderId, paymentId, signature } = req.body;

    const hash = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(orderId + '|' + paymentId)
      .digest('hex');

    if (hash === signature) {
      // Update payment status in DB
      await Payment.findOneAndUpdate(
        { razorpayOrderId: orderId },
        { paymentStatus: 'Completed', razorpayPaymentId: paymentId, razorpaySignature: signature }
      );

      res.json({ success: true, message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
