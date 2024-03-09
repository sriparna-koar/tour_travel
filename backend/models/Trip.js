const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  tripDate: { type: Date, required: true },
  hotelName: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Trip', tripSchema);

