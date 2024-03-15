


const Trip = require('../models/Trip');

exports.addTrip = async (req, res) => {
  try {
    const { tripDate, hotelName, locationVisited, price } = req.body;

    if (!tripDate || !hotelName || !locationVisited || !price) {
      return res.status(400).json({ message: "Please provide all trip details." });
    }

    const newTrip = new Trip({
      user: req.userId, 
      tripDate,
      hotelName,
      locationVisited,
      price,
    });

    await newTrip.save();

    res.status(201).json({ message: "Trip added successfully.", trip: newTrip });
  } catch (error) {
    console.error("Error adding trip:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.userId });
    res.status(200).json({ trips });
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
exports.updateTrip = async (req, res) => {
  try {
    const tripId = req.params.id;
    const { tripDate, hotelName, locationVisited, price } = req.body;

    const updatedTrip = await Trip.findByIdAndUpdate(tripId, { tripDate, hotelName, locationVisited, price }, { new: true });

    res.status(200).json({ message: "Trip updated successfully", trip: updatedTrip });
  } catch (error) {
    console.error("Error updating trip:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const tripId = req.params.id;

    await Trip.findByIdAndDelete(tripId);

    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (error) {
    console.error("Error deleting trip:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
