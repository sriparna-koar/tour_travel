
// import React, { useState, useEffect } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Drawer, Typography, Button } from "@mui/material";
// import { Visibility, Payment, Close } from "@mui/icons-material";
// // import "./Hotel.css";

// const DEFAULT_IMAGE = "data:image/png;base64,...";
// const loadRazorpayScript = (src) => {
//   return new Promise((resolve) => {
//     if (document.querySelector(`script[src="${src}"]`)) {
//       resolve(true);
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };
// const Hotel = () => {
//   const [hotels, setHotels] = useState([]);
//   const [selectedHotel, setSelectedHotel] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch("https://tour-travel-uuoe.onrender.com/hotels");
//         if (!response.ok) throw new Error("Failed to fetch hotels");
//         const data = await response.json();
//         setHotels(data);
//       } catch (error) {
//         console.error("Error fetching hotels:", error);
//       }
//     };
//     fetchHotels();
//   }, []);

//   const handleViewDetails = (hotel) => {
//     setSelectedHotel(hotel);
//     setDrawerOpen(true);
//   };

//   const handleCloseDrawer = () => {
//     setDrawerOpen(false);
//     setSelectedHotel(null);
//   };
//   const handlePayment = async (hotel) => {
//     try {
//       const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
//       if (!res) {
//         alert("Failed to load Razorpay SDK.");
//         return;
//       }
  
//       const response = await fetch("https://tour-travel-uuoe.onrender.com/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ hotelId: hotel._id, amount: hotel.price }),
//       });
  
//       const data = await response.json();
//       if (!data.success) throw new Error("Order creation failed");
  
//       const options = {
//         key: "rzp_test_PogkLPhwj9dn91",
//         amount: data.order.amount,
//         currency: "INR",
//         name: hotel.name,
//         description: "Hotel Booking",
//         order_id: data.order.id,
//         handler: async (paymentResponse) => {
//           try {
//             await fetch("https://tour-travel-uuoe.onrender.com/verify-payment", {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 orderId: data.order.id,
//                 paymentId: paymentResponse.razorpay_payment_id,
//                 signature: paymentResponse.razorpay_signature,
//               }),
//             });
//             alert("Payment Successful!");
//           } catch (error) {
//             console.error("Payment verification error:", error);
//           }
//         },
//         theme: { color: "#3399cc" },
//       };
  
//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment error:", error);
//     }
//   };
  


//   return (
//     <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Discover Luxury Stays</h1>
//       <TableContainer component={Paper} className="shadow-lg rounded-lg">
//         <Table>
//           <TableHead className="bg-blue-500 text-white">
//             <TableRow>
//               {/* <TableCell className="text-white font-semibold">Image</TableCell> */}
//               <TableCell className="text-white font-semibold">Name</TableCell>
//               <TableCell className="text-white font-semibold">Price</TableCell>
//               <TableCell className="text-white font-semibold">Location</TableCell>
//               <TableCell className="text-white font-semibold">Details</TableCell>
//               <TableCell className="text-white font-semibold">Book</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {hotels.map((hotel) => (
//               <TableRow key={hotel._id} className="hover:bg-blue-100 transition-all">
//                 {/* <TableCell>
//                   <img src={hotel.picture?.trim() ? hotel.picture : DEFAULT_IMAGE} alt={hotel.name || "Default Hotel"} className="w-16 h-16 rounded-lg shadow-md" />
//                 </TableCell> */}
//                 <TableCell className="font-semibold text-blue-800">{hotel.name}</TableCell>
//                 <TableCell className="text-blue-700">${hotel.price} / night</TableCell>
//                 <TableCell className="text-gray-700">{hotel.location}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary" onClick={() => handleViewDetails(hotel)}>
//                     <Visibility />
//                   </IconButton>
//                 </TableCell>
//                 <TableCell>
//                   <IconButton color="secondary" onClick={() => handlePayment(hotel)}>
//                     <Payment />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
//         <div className="w-80 p-4">
//           <div className="flex justify-between items-center">
//             <Typography variant="h6" className="text-blue-900 font-bold">Hotel Details</Typography>
//             <IconButton onClick={handleCloseDrawer}>
//               <Close />
//             </IconButton>
//           </div>
//           {selectedHotel && (
//             <div className="mt-4">
//               <img src={selectedHotel.picture || DEFAULT_IMAGE} alt={selectedHotel.name || "Default Hotel"} className="w-full h-40 object-cover rounded-lg shadow-md" />
//               <h2 className="text-xl font-bold text-blue-800 mt-4">{selectedHotel.name}</h2>
//               <p className="text-gray-700">{selectedHotel.location}</p>
//               <p className="text-blue-700 font-semibold">${selectedHotel.price} / night</p>
//               <Button variant="contained" color="primary" fullWidth className="mt-4" onClick={() => handlePayment(selectedHotel)}>
//                 Pay & Book Now
//               </Button>
//             </div>
//           )}
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default Hotel;

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Drawer,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Box,
  Alert, // Added Alert for messages
  AlertTitle // Added AlertTitle for messages
} from "@mui/material";
import { Visibility, Payment, Close, Star, InfoOutlined } from "@mui/icons-material"; // Added InfoOutlined
// import "./Hotel.css"; // Ensure your CSS is still relevant or use TailwindCSS as you have

const DEFAULT_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAACg3M+jAAAAA1BMVEX///+nx4iEBAAAAqElEQVR4nO3BMQEAAADCoPzN/SBNHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgzwLpBAABhH8mDAAAAABJRU5ErkJggg=="; // Keep your default image

// Function to load Razorpay script (already present)
const loadRazorpayScript = (src) => {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiReviewSummary, setAiReviewSummary] = useState("");
  const [userQuery, setUserQuery] = useState("");
  const [hotelFetchError, setHotelFetchError] = useState(false); // New state for fetch errors
  const [personalizedSearchMessage, setPersonalizedSearchMessage] = useState(""); // To display AI search results

  // Fetch hotels (already present)
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("https://tour-travel-uuoe.onrender.com/hotels");
        if (!response.ok) {
          throw new Error("Failed to fetch hotels");
        }
        const data = await response.json();
        setHotels(data);
        setHotelFetchError(false); // Reset error on success
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setHotelFetchError(true); // Set error on failure
        setHotels([]); // Ensure hotels array is empty on error
      }
    };
    fetchHotels();
  }, []);

  const handleViewDetails = async (hotel) => {
    setSelectedHotel(hotel);
    setDrawerOpen(true);
    setAiRecommendation("");
    setAiReviewSummary("");
    setAiLoading(true);

    try {
      // Fetch personalized recommendation from AI
      const recommendationResponse = await fetch("https://tour-travel-uuoe.onrender.com/ai/recommendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hotelName: hotel.name, location: hotel.location, price: hotel.price }),
      });
      const recommendationData = await recommendationResponse.json();
      if (recommendationData.success) {
        setAiRecommendation(recommendationData.recommendation);
      } else {
        setAiRecommendation("Could not generate a personalized recommendation at this time.");
      }

      // Fetch review summary from AI (assuming hotels might have a 'reviews' array)
      if (hotel.reviews && hotel.reviews.length > 0) {
        const reviewSummaryResponse = await fetch("https://tour-travel-uuoe.onrender.com/ai/summarize-reviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reviews: hotel.reviews }),
        });
        const reviewSummaryData = await reviewSummaryResponse.json();
        if (reviewSummaryData.success) {
          setAiReviewSummary(reviewSummaryData.summary);
        } else {
          setAiReviewSummary("Could not generate a review summary.");
        }
      } else {
        setAiReviewSummary("No reviews available for summary.");
      }

    } catch (error) {
      console.error("Error fetching AI data:", error);
      setAiRecommendation("Failed to load AI recommendation.");
      setAiReviewSummary("Failed to load review summary.");
    } finally {
      setAiLoading(false);
    }
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedHotel(null);
    setAiRecommendation("");
    setAiReviewSummary("");
    setAiLoading(false);
  };

  // Payment handler (already present)
  const handlePayment = async (hotel) => {
    try {
      const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!res) {
        alert("Failed to load Razorpay SDK.");
        return;
      }

      const response = await fetch("https://tour-travel-uuoe.onrender.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hotelId: hotel._id, amount: hotel.price }),
      });

      const data = await response.json();
      if (!data.success) throw new Error("Order creation failed");

      const options = {
        key: "rzp_test_PogkLPhwj9dn91", // Replace with your actual Razorpay Key ID
        amount: data.order.amount,
        currency: "INR",
        name: hotel.name,
        description: "Hotel Booking",
        order_id: data.order.id,
        handler: async (paymentResponse) => {
          try {
            await fetch("https://tour-travel-uuoe.onrender.com/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: data.order.id,
                paymentId: paymentResponse.razorpay_payment_id,
                signature: paymentResponse.razorpay_signature,
              }),
            });
            alert("Payment Successful!");
          } catch (error) {
            console.error("Payment verification error:", error);
            alert("Payment verification failed. Please contact support.");
          }
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during payment. Please try again.");
    }
  };

  const handleUserQuerySubmit = async () => {
    if (!userQuery.trim()) {
      setPersonalizedSearchMessage("Please enter a query for personalized search.");
      return;
    }

    setAiLoading(true);
    setPersonalizedSearchMessage(""); // Clear previous messages
    try {
      const response = await fetch("https://tour-travel-uuoe.onrender.com/ai/personalized-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userQuery, existingHotels: hotels.map(h => ({ name: h.name, location: h.location, price: h.price, description: h.description, amenities: h.amenities })) }),
      });
      const data = await response.json();
      if (data.success && data.recommendedHotels) {
        setPersonalizedSearchMessage(data.recommendedHotels);
      } else {
        setPersonalizedSearchMessage("Could not provide personalized search results. Please try a different query.");
      }
    } catch (error) {
      console.error("Error with personalized search:", error);
      setPersonalizedSearchMessage("Error processing personalized search. Please try again later.");
    } finally {
      setAiLoading(false);
      setUserQuery(""); // Clear the input field
    }
  };


  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Discover Luxury Stays</h1>

      {/* New: Personalized Search Input */}
      <Box className="mb-6 p-4 bg-white rounded-lg shadow-md flex items-center">
        <TextField
          label="Tell us what you're looking for (e.g., 'family-friendly hotel in Goa with a pool')"
          variant="outlined"
          fullWidth
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleUserQuerySubmit();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUserQuerySubmit}
          disabled={aiLoading}
          className="ml-4 h-14"
        >
          {aiLoading ? <CircularProgress size={24} color="inherit" /> : "AI Search"}
        </Button>
      </Box>

      {personalizedSearchMessage && (
        <Alert severity="info" className="mb-4">
          <AlertTitle>AI Search Result</AlertTitle>
          {personalizedSearchMessage}
        </Alert>
      )}

      {hotelFetchError ? (
        <Alert severity="error" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          Failed to load hotels. Please check your network connection or try again later.
        </Alert>
      ) : hotels.length === 0 ? (
        <Alert severity="info" className="mb-4">
          <AlertTitle>No Hotels Available</AlertTitle>
          It seems there are no hotels currently listed. Please check back later, or use the AI Search above to inquire about specific hotel needs.
        </Alert>
      ) : (
        <TableContainer component={Paper} className="shadow-lg rounded-lg">
          <Table>
            <TableHead className="bg-blue-500 text-white">
              <TableRow>
                <TableCell className="text-white font-semibold">Name</TableCell>
                <TableCell className="text-white font-semibold">Price</TableCell>
                <TableCell className="text-white font-semibold">Location</TableCell>
                <TableCell className="text-white font-semibold">Details</TableCell>
                <TableCell className="text-white font-semibold">Book</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hotels.map((hotel) => (
                <TableRow key={hotel._id} className="hover:bg-blue-100 transition-all">
                  <TableCell className="font-semibold text-blue-800">{hotel.name}</TableCell>
                  <TableCell className="text-blue-700">${hotel.price} / night</TableCell>
                  <TableCell className="text-gray-700">{hotel.location}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleViewDetails(hotel)}>
                      <Visibility />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton color="secondary" onClick={() => handlePayment(hotel)}>
                      <Payment />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
        <div className="w-80 p-4">
          <div className="flex justify-between items-center">
            <Typography variant="h6" className="text-blue-900 font-bold">Hotel Details</Typography>
            <IconButton onClick={handleCloseDrawer}>
              <Close />
            </IconButton>
          </div>
          {selectedHotel && (
            <div className="mt-4">
              <img src={selectedHotel.picture || DEFAULT_IMAGE} alt={selectedHotel.name || "Default Hotel"} className="w-full h-40 object-cover rounded-lg shadow-md" />
              <h2 className="text-xl font-bold text-blue-800 mt-4">{selectedHotel.name}</h2>
              <p className="text-gray-700">{selectedHotel.location}</p>
              <p className="text-blue-700 font-semibold">${selectedHotel.price} / night</p>

              {/* Display Hotel Amenities (if available in your hotel data) */}
              {selectedHotel.amenities && (
                <div className="mt-3">
                  <Typography variant="subtitle1" className="font-semibold text-blue-800">Amenities:</Typography>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedHotel.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* AI-Powered Recommendation */}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg shadow-sm">
                <Typography variant="subtitle1" className="font-semibold text-blue-800 flex items-center">
                  <Star className="mr-1 text-yellow-500" /> AI Recommendation:
                </Typography>
                {aiLoading ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <Typography variant="body2" className="text-gray-800 mt-2">
                    {aiRecommendation || "Generating personalized insights..."}
                  </Typography>
                )}
              </div>

          

              <Button variant="contained" color="primary" fullWidth className="mt-4" onClick={() => handlePayment(selectedHotel)}>
                Pay & Book Now
              </Button>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default Hotel;