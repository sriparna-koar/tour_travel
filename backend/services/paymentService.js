class PaymentService {
    constructor(paymentMethod) {
      this.paymentMethod = paymentMethod;
    }
  
    async createPaymentIntent(amount, metadata) {
      switch (this.paymentMethod) {
        case 'razorpay':
          return this.createRazorpayOrder(amount, metadata);
        case 'stripe':
          return this.createStripePaymentIntent(amount, metadata);
        case 'paypal':
          return this.createPaypalOrder(amount, metadata);
        default:
          throw new Error('Invalid payment method');
      }
    }
  
    async createRazorpayOrder(amount, metadata) {
      const razorpay = require('../config/razorpay');
      return await razorpay.orders.create({
        amount: amount * 100,
        currency: 'INR',
        receipt: `booking_${Date.now()}`,
        notes: metadata
      });
    }
  
    // Add implementations for other payment methods as needed
  }
  
  module.exports = PaymentService;
  