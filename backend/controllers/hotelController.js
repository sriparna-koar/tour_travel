const Hotel = require('../models/Hotel');

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addHotel = async (req, res) => {
  const hotel = new Hotel({
    name: req.body.name,
    picture: req.body.picture,
    price: req.body.price,
    location: req.body.location,
    foodSupply: req.body.foodSupply,
    nearbyFeatures: req.body.nearbyFeatures
  });

  try {
    const newHotel = await hotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
