
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Hotel.css';

// const Hotel = () => {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch('https://tour-travel-uuoe.onrender.com/hotels');
//         if (!response.ok) {
//           throw new Error('Failed to fetch hotels');
//         }
//         const data = await response.json();
//         setHotels(data);
//       } catch (error) {
//         console.error('Error fetching hotels:', error);
//       }
//     };

//     fetchHotels();
//   }, []);

//   return (
//     <div className="hotel-container">
//       <h1 className="hotel-heading">Discover Luxury Stays</h1>
//       <div className="hotel-cards-container">
//         {hotels.map((hotel, index) => (
//           <div key={index} className="hotel-card">
//             <div className="hotel-image-container">
//               <img src={hotel.picture} alt={hotel.name} className="hotel-image" />
//             </div>
//             <div className="hotel-details">
//               <h2 className="hotel-name">{hotel.name}</h2>
//               <p className="hotel-price">${hotel.price} / night</p>
//               <p className="hotel-location">{hotel.location}</p>
//               <p className="hotel-food-supply">
//                 {hotel.foodSupply ? 'Food Included' : 'No Food Supply'}
//               </p>
//               <p className="hotel-nearby-features">
//                 {hotel.nearbyFeatures.slice(0, 3).join(', ')}...
//               </p>
//               <Link
//                 to={{ pathname: '/booking', state: { hotel } }}
//                 className="book-now-link"
//               >
//                 Book Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hotel;
// import React, { useState, useEffect } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Drawer, Typography, Button } from "@mui/material";
// import { Visibility, Close } from "@mui/icons-material";
// import "./Hotel.css";

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

//   const handlePayment = async () => {
//     if (!selectedHotel) return;

//     try {
//       const response = await fetch("/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ hotelId: selectedHotel._id }),
//       });

//       const data = await response.json();
//       if (data.response !== "SUCCESS") throw new Error("Order creation failed");

//       const isLoaded = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
//       if (!isLoaded) throw new Error("Failed to load Razorpay script");

//       const options = {
//         key: "rzp_test_PogkLPhwj9dn91",
//         amount: data.data.amount,
//         currency: data.data.currency,
//         name: selectedHotel.name,
//         description: "Hotel Booking",
//         order_id: data.data.orderId,
//         handler: async (response) => {
//           try {
//             await fetch("/verify-payment", {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 orderId: data.data.orderId,
//                 paymentId: response.razorpay_payment_id,
//                 signature: response.razorpay_signature,
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
//               <TableCell className="text-white font-semibold">Image</TableCell>
//               <TableCell className="text-white font-semibold">Name</TableCell>
//               <TableCell className="text-white font-semibold">Price</TableCell>
//               <TableCell className="text-white font-semibold">Location</TableCell>
//               <TableCell className="text-white font-semibold">Details</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {hotels.map((hotel) => (
//               <TableRow key={hotel._id} className="hover:bg-blue-100 transition-all">
//                 <TableCell>
//                   <img src={hotel.picture?.trim() ? hotel.picture : DEFAULT_IMAGE} alt={hotel.name || "Default Hotel"} className="w-16 h-16 rounded-lg shadow-md" />
//                 </TableCell>
//                 <TableCell className="font-semibold text-blue-800">{hotel.name}</TableCell>
//                 <TableCell className="text-blue-700">${hotel.price} / night</TableCell>
//                 <TableCell className="text-gray-700">{hotel.location}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary" onClick={() => handleViewDetails(hotel)}>
//                     <Visibility />
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
//               <Button variant="contained" color="primary" fullWidth className="mt-4" onClick={handlePayment}>
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
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Drawer, Typography, Button } from "@mui/material";
import { Visibility, Payment, Close } from "@mui/icons-material";
import "./Hotel.css";

const DEFAULT_IMAGE = "data:image/png;base64,...";
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

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("https://tour-travel-uuoe.onrender.com/hotels");
        if (!response.ok) throw new Error("Failed to fetch hotels");
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
    fetchHotels();
  }, []);

  const handleViewDetails = (hotel) => {
    setSelectedHotel(hotel);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedHotel(null);
  };
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
        key: "rzp_test_PogkLPhwj9dn91",
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
          }
        },
        theme: { color: "#3399cc" },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };
  
  // const handlePayment = async (hotel) => {
  //   try {
  //     const response = await fetch("http://localhost:5001/create-order", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ hotelId: hotel._id, amount: hotel.price }),
  //     });

  //     const data = await response.json();
  //     if (!data.success) throw new Error("Order creation failed");

  //     const options = {
  //       key: "rzp_test_PogkLPhwj9dn91",
  //       amount: data.order.amount,
  //       currency: "INR",
  //       name: hotel.name,
  //       description: "Hotel Booking",
  //       order_id: data.order.id,
  //       handler: async (response) => {
  //         try {
  //           await fetch("http://localhost:5001/verify-payment", {
  //             method: "POST",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({
  //               orderId: data.order.id,
  //               paymentId: response.razorpay_payment_id,
  //               signature: response.razorpay_signature,
  //             }),
  //           });
  //           alert("Payment Successful!");
  //         } catch (error) {
  //           console.error("Payment verification error:", error);
  //         }
  //       },
  //       theme: { color: "#3399cc" },
  //     };

  //     const rzp = new window.Razorpay(options);
  //     rzp.open();
  //   } catch (error) {
  //     console.error("Payment error:", error);
  //   }
  // };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Discover Luxury Stays</h1>
      <TableContainer component={Paper} className="shadow-lg rounded-lg">
        <Table>
          <TableHead className="bg-blue-500 text-white">
            <TableRow>
              <TableCell className="text-white font-semibold">Image</TableCell>
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
                <TableCell>
                  <img src={hotel.picture?.trim() ? hotel.picture : DEFAULT_IMAGE} alt={hotel.name || "Default Hotel"} className="w-16 h-16 rounded-lg shadow-md" />
                </TableCell>
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

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Drawer, Typography } from '@mui/material';
// import { Visibility, Close } from '@mui/icons-material';
// import './Hotel.css';
// const DEFAULT_IMAGE = "data:i";
// const Hotel = () => {
//   const [hotels, setHotels] = useState([]);
//   const [selectedHotel, setSelectedHotel] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch('https://tour-travel-uuoe.onrender.com/hotels');
//         if (!response.ok) {
//           throw new Error('Failed to fetch hotels');
//         }
//         const data = await response.json();
//         setHotels(data);
//       } catch (error) {
//         console.error('Error fetching hotels:', error);
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

//   return (
//     <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Discover Luxury Stays</h1>
//       <TableContainer component={Paper} className="shadow-lg rounded-lg">
//         <Table>
//           <TableHead className="bg-blue-500 text-white">
//             <TableRow>
//               <TableCell className="text-white font-semibold">Image</TableCell>
//               <TableCell className="text-white font-semibold">Name</TableCell>
//               <TableCell className="text-white font-semibold">Price</TableCell>
//               <TableCell className="text-white font-semibold">Location</TableCell>
//               <TableCell className="text-white font-semibold">Details</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {hotels.map((hotel, index) => (
//               <TableRow key={index} className="hover:bg-blue-100 transition-all">
//                 <TableCell>
//                 <img 
//                   src={hotel.picture && hotel.picture.trim() !== "" ? hotel.picture : DEFAULT_IMAGE} 
//                   alt={hotel.name || "Default Hotel"} 
//                   className="w-16 h-16 rounded-lg shadow-md" 
//                 />

         
//                 </TableCell>
//                 <TableCell className="font-semibold text-blue-800">{hotel.name}</TableCell>
//                 <TableCell className="text-blue-700">${hotel.price} / night</TableCell>
//                 <TableCell className="text-gray-700">{hotel.location}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary" onClick={() => handleViewDetails(hotel)}>
//                     <Visibility />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Sidebar Drawer for Details */}
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
//               <img 
//               src={selectedHotel.picture || DEFAULT_IMAGE} 
//               alt={selectedHotel.name || "Default Hotel"} 
//               className="w-full h-40 object-cover rounded-lg shadow-md" />
//               <h2 className="text-xl font-bold text-blue-800 mt-4">{selectedHotel.name}</h2>
//               <p className="text-gray-700">{selectedHotel.location}</p>
//               <p className="text-blue-700 font-semibold">${selectedHotel.price} / night</p>
//               <p className="mt-2 text-sm text-gray-600">{selectedHotel.foodSupply ? 'Food Included' : 'No Food Supply'}</p>
//               <p className="text-sm text-gray-600">Nearby: {selectedHotel.nearbyFeatures.slice(0, 3).join(', ')}...</p>
//               <Link to={{ pathname: '/booking', state: { hotel: selectedHotel } }} className="block bg-blue-600 text-white text-center py-2 mt-4 rounded-lg shadow hover:bg-blue-700 transition-all">
//                 Book Now
//               </Link>
//             </div>
//           )}
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default Hotel;
