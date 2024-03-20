
const Trip = require('../models/Trip');

exports.addTrip = async (req, res) => {
  try {
    const { name, tripDate, hotelName, locationVisited, price } = req.body;

    if (!name || !tripDate || !hotelName || !locationVisited || !price) {
      return res.status(400).json({ message: "Please provide all trip details." });
    }

    const newTrip = new Trip({
      user: req.userId,
      name,
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
    const userId = req.userId; // Assuming you have the user's ID stored in req.userId
    const trips = await Trip.find({ user: userId });
    res.status(200).json({ trips });
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// exports.getAllTrips = async (req, res) => {
//   try {
//     const trips = await Trip.find({ user: req.userId });
//     res.status(200).json({ trips });
//   } catch (error) {
//     console.error("Error fetching trips:", error);
//     res.status(500).json({ message: "Internal server error." });
//   }
// };

exports.deleteTrip = async (req, res) => {
  try {
    const tripId = req.params.id;

    // Check if the tripId is valid
    if (!tripId) {
      console.error("Invalid trip ID provided.");
      return res.status(400).json({ message: "Invalid trip ID provided." });
    }

    // Find the trip
    const trip = await Trip.findOne({ _id: tripId, user: req.userId });

    // Check if the trip exists
    if (!trip) {
      console.error("Trip not found for ID:", tripId);
      return res.status(404).json({ message: "Trip not found." });
    }

    // Remove the trip if it belongs to the current user
    await Trip.deleteOne({ _id: tripId, user: req.userId });

    res.status(200).json({ message: "Trip deleted successfully." });
  } catch (error) {
    console.error("Error deleting trip:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

