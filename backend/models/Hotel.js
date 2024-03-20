const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  foodSupply: { type: Boolean, default: false },
  nearbyFeatures: { type: [String], default: [] }
});

module.exports = mongoose.model('Hotel', hotelSchema);
