// // tripController.js

// const Trip = require('../models/Trip');

// exports.addTrip = async (req, res) => {
//   try {
//     const { tripDate, hotelName, price } = req.body;
    
//     // Validate input data
//     if (!tripDate || !hotelName || !price) {
//       return res.status(400).json({ message: "Please provide all trip details." });
//     }

//     // Create new trip
//     const newTrip = new Trip({
//       user: req.user._id, // Assuming you have authenticated user stored in req.user
//       tripDate,
//       hotelName,
//       price
//     });

//     // Save trip to database
//     await newTrip.save();

//     res.status(201).json({ message: "Trip added successfully.", trip: newTrip });
//   } catch (error) {
//     console.error("Error adding trip:", error);
//     res.status(500).json({ message: "Internal server error." });
//   }
// };

// exports.getTripsPastYear = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming you have authenticated user stored in req.user
//     const oneYearAgo = new Date();
//     oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

//     // Find trips for the past year for the logged-in user
//     const trips = await Trip.find({ user: userId, tripDate: { $gte: oneYearAgo } });

//     res.status(200).json({ trips });
//   } catch (error) {
//     console.error("Error fetching trips:", error);
//     res.status(500).json({ message: "Internal server error." });
//   }
// };
// tripController.js







const Trip = require('../models/Trip');

exports.addTrip = async (req, res) => {
  try {
    const { tripDate, hotelName, price } = req.body;
    
    // Validate input data
    if (!tripDate || !hotelName || !price) {
      return res.status(400).json({ message: "Please provide all trip details." });
    }

  

    // Create new trip
    const newTrip = new Trip({
      tripDate,
      hotelName,
      price,
  
    });

    // Save trip to database
    await newTrip.save();

    res.status(201).json({ message: "Trip added successfully.", trip: newTrip });
  } catch (error) {
    console.error("Error adding trip:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.getTripsPastYear = async (req, res) => {
  try {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    // Find trips for the past year
    const trips = await Trip.find({ tripDate: { $gte: oneYearAgo } });

    res.status(200).json({ trips });
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
