
// // import React from 'react';
// // import './Home.css'; // Import a CSS file for styling

// // const Home = () => {
// //   return (
// //     <div className="home-container">
// //       <div className="content-container">
// //         <div className="banner">
// //           <h1>Welcome to Wanderlust Travels!</h1>
// //           <p>Your Gateway to Unforgettable Adventures</p>

// //              <img src="destination1.jpg" alt="Destination 1" />
// //         </div>
// //         <div className="trip-info">
// //           <div className="trip-description">
// //             <h2 className="explore-heading">Explore Our Trips</h2>
// //             <p className="trip-paragraph">Embark on a journey to discover breathtaking destinations across the globe. Whether you crave adrenaline-pumping adventures, serene escapes, or cultural immersions, Wanderlust Travels has the perfect expedition for you.</p>
// //             <p className="trip-paragraph">Our expert guides and meticulously crafted itineraries ensure a seamless and enriching travel experience. Let us be your compass as you navigate through the wonders of the world.</p>
// //           </div>
// //         </div>
// //         <div className="gallery-container">
// //           <h2 className="gallery-heading">Popular Destinations</h2>
// //           <div className="gallery">
// //             <div className="gallery-item">
// //               <img src="tour_travel_logo.jpeg" alt="Destination 1" />
// //               <div className="gallery-item-info">
// //                 <h3>Destination 1</h3>
// //                 <p>A brief description of the destination.</p>
// //               </div>
// //             </div>
// //             <div className="gallery-item">
// //               <img src="tour_travel_logo.jpeg" alt="Destination 2" />
// //               <div className="gallery-item-info">
// //                 <h3>Destination 2</h3>
// //                 <p>A brief description of the destination.</p>
// //               </div>
// //             </div>
// //             <div className="gallery-item">
// //               <img src="tour_travel_logo.jpeg" alt="Destination 3" />
// //               <div className="gallery-item-info">
// //                 <h3>Destination 3</h3>
// //                 <p>A brief description of the destination.</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="testimonial-container">
// //           <h2 className="testimonial-heading">What Our Clients Say</h2>
// //           <div className="testimonials">
// //             <div className="testimonial">
// //               <p>"An amazing experience! The trip was well organized and the guides were fantastic. Highly recommend Wanderlust Travels!"</p>
// //               <h3>- Client Name</h3>
// //             </div>
// //             <div className="testimonial">
// //               <p>"A perfect mix of adventure and relaxation. Every detail was taken care of. Thank you for an unforgettable trip!"</p>
// //               <h3>- Client Name</h3>
// //             </div>
// //             <div className="testimonial">
// //               <p>"From booking to the end of the trip, everything was seamless. Can't wait for my next adventure with Wanderlust Travels."</p>
// //               <h3>- Client Name</h3>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from "react";
// import { FaMapMarkedAlt, FaGlobeAmericas, FaHiking, FaStar, FaUsers } from "react-icons/fa";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const destinationData = [
//   { name: "Paris", popularity: 85 },
//   { name: "Tokyo", popularity: 90 },
//   { name: "New York", popularity: 80 },
//   { name: "Sydney", popularity: 75 },
//   { name: "Dubai", popularity: 95 },
// ];

// const Home = () => {
//   return (
//     <div className="bg-gray-100 text-gray-900 min-h-screen p-8">
//       {/* Hero Section */}
//       <div className="text-center py-12">
//         <h1 className="text-5xl font-bold text-blue-700">Welcome to Wanderlust Travels!</h1>
//         <p className="text-lg mt-3 text-gray-700">Your Gateway to Unforgettable Adventures</p>
//         <div className="flex justify-center gap-8 mt-6 text-6xl text-blue-500">
//           <FaMapMarkedAlt />
//           <FaGlobeAmericas />
//           <FaHiking />
//         </div>
//       </div>

//       {/* Explore Trips Section */}
//       <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-6 text-blue-700">Explore Our Trips</h2>
//         <p className="mb-4 leading-relaxed">
//           Embark on a journey to breathtaking destinations across the globe. Whether you're looking for adventure,
//           relaxation, or cultural experiences, we have the perfect trip for you.
//         </p>
//         <p className="leading-relaxed">
//           Our expert guides and meticulously planned itineraries ensure a seamless travel experience. Let us be your
//           compass to explore the world's most amazing places with ease and comfort.
//         </p>
//       </div>

//       {/* Popular Destinations Chart */}
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-6 text-blue-700">Popular Destinations</h2>
//         <ResponsiveContainer width="100%" height={350}>
//           <BarChart data={destinationData}>
//             <XAxis dataKey="name" stroke="#4A5568" tick={{ fontSize: 14 }} />
//             <YAxis stroke="#4A5568" tick={{ fontSize: 14 }} />
//             <Tooltip wrapperClassName="text-gray-900" />
//             <Bar dataKey="popularity" fill="#3182CE" radius={[10, 10, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Testimonials Section */}
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-6 text-blue-700">What Our Clients Say</h2>
//         <div className="space-y-6">
//           <div className="flex items-center gap-6">
//             <FaUsers className="text-blue-500 text-4xl" />
//             <div>
//               <p className="italic text-lg leading-relaxed">"An amazing experience! The trip was well organized and the guides were fantastic. Highly recommend!"</p>
//               <h3 className="font-semibold text-gray-800">- Alex Smith</h3>
//             </div>
//           </div>
//           <div className="flex items-center gap-6">
//             <FaStar className="text-yellow-500 text-4xl" />
//             <div>
//               <p className="italic text-lg leading-relaxed">"A perfect mix of adventure and relaxation. Every detail was taken care of. Thank you for an unforgettable trip!"</p>
//               <h3 className="font-semibold text-gray-800">- Sarah Johnson</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { FaMapMarkedAlt, FaGlobeAmericas, FaHiking, FaStar, FaUsers, FaHotel, FaCloudSun } from "react-icons/fa";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from "recharts";
// import Razorpay from "razorpay";

// const yearlyData = [
//   { year: "2020", hotelsAdded: 50, priceComparison: 100 },
//   { year: "2021", hotelsAdded: 80, priceComparison: 120 },
//   { year: "2022", hotelsAdded: 100, priceComparison: 140 },
//   { year: "2023", hotelsAdded: 150, priceComparison: 160 },
// ];

// const Home = () => {
//   const handleBooking = () => {
//     // Booking logic and email notification
//     alert("Booking confirmed! Details sent to the hotel.");
//   };

//   const handlePayment = () => {
//     // Razorpay integration logic
//     alert("Payment processing via Razorpay...");
//   };

//   return (
//     <div className="bg-gray-100 text-gray-900 min-h-screen p-8">
//       {/* Hero Section */}
//       <div className="text-center py-12">
//         <h1 className="text-5xl font-bold text-blue-700">Welcome to Wanderlust Travels!</h1>
//         <p className="text-lg mt-3 text-gray-700">Your Gateway to Unforgettable Adventures</p>
//         <div className="flex justify-center gap-8 mt-6 text-6xl text-blue-500">
//           <FaMapMarkedAlt />
//           <FaGlobeAmericas />
//           <FaHiking />
//         </div>
//       </div>

//       {/* Explore Trips Section */}
//       <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-6 text-blue-700">Explore Our Trips</h2>
//         <p className="mb-4 leading-relaxed">
//           Embark on a journey to breathtaking destinations across the globe. Whether you're looking for adventure,
//           relaxation, or cultural experiences, we have the perfect trip for you.
//         </p>
//         <p className="leading-relaxed">
//           Our expert guides and meticulously planned itineraries ensure a seamless travel experience. Let us be your
//           compass to explore the world's most amazing places with ease and comfort.
//         </p>
//       </div>

//       {/* Yearly Analytics Section */}
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-6 text-blue-700">Yearly Travel Insights</h2>
//         <ResponsiveContainer width="100%" height={350}>
//           <LineChart data={yearlyData}>
//             <XAxis dataKey="year" stroke="#4A5568" tick={{ fontSize: 14 }} />
//             <YAxis stroke="#4A5568" tick={{ fontSize: 14 }} />
//             <Tooltip wrapperClassName="text-gray-900" />
//             <Line type="monotone" dataKey="hotelsAdded" stroke="#3182CE" strokeWidth={3} />
//             <Line type="monotone" dataKey="priceComparison" stroke="#E53E3E" strokeWidth={3} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Hotel Booking Section */}
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-6 text-blue-700">Book Your Stay</h2>
//         <button
//           onClick={handleBooking}
//           className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 w-full"
//         >
//           Book Now & Send Details
//         </button>
//       </div>

//       {/* Payment Section */}
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-6 text-blue-700">Secure Payment</h2>
//         <button
//           onClick={handlePayment}
//           className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 w-full"
//         >
//           Pay via Razorpay
//         </button>
//       </div>

//       {/* Weather Report */}
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-6 text-blue-700">Live Weather Report</h2>
//         <div className="flex items-center gap-4">
//           <FaCloudSun className="text-yellow-500 text-4xl" />
//           <p className="text-lg">Stay updated with real-time weather conditions at your travel destination.</p>
//         </div>
//       </div>

//       {/* Chatbot Section */}
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
//         <h2 className="text-3xl font-semibold mb-6 text-blue-700">Chat with Us</h2>
//         <div className="text-lg">Need help? Chat with our AI assistant to get instant travel guidance.</div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { 
//   FaMapMarkedAlt, FaGlobeAmericas, FaHiking, FaStar, 
//   FaUsers, FaHotel, FaCloudSun, FaPlane, FaCompass,
//   FaCalendarAlt, FaPhoneAlt, FaEnvelope 
// } from "react-icons/fa";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const yearlyData = [
//   { year: "2020", hotelsAdded: 50, priceComparison: 100, customerSatisfaction: 85 },
//   { year: "2021", hotelsAdded: 80, priceComparison: 120, customerSatisfaction: 88 },
//   { year: "2022", hotelsAdded: 100, priceComparison: 140, customerSatisfaction: 92 },
//   { year: "2023", hotelsAdded: 150, priceComparison: 160, customerSatisfaction: 95 },
// ];

// const featuredDestinations = [
//   { name: "Bali Paradise", price: "$1,299", rating: 4.8 },
//   { name: "Swiss Alps", price: "$2,499", rating: 4.9 },
//   { name: "Maldives Retreat", price: "$3,299", rating: 4.7 },
// ];

// const Home = () => {
//   const handleBooking = () => {
//     alert("Booking confirmed! Details sent to the hotel.");
//   };

//   const handlePayment = () => {
//     alert("Payment processing via Razorpay...");
//   };

//   return (
//     <div className="bg-gray-50 text-gray-800 min-h-screen px-4 py-6">
//       {/* Hero Section - More Compact */}
//       <div className="text-center py-8">
//         <h1 className="text-3xl font-bold text-blue-600">Wanderlust Travels</h1>
//         <p className="text-sm mt-2 text-gray-600">Curated Experiences • Luxury Stays • Memorable Adventures</p>
//         <div className="flex justify-center gap-6 mt-4 text-4xl text-blue-500">
//           <FaMapMarkedAlt className="hover:text-blue-600 transition-colors" />
//           <FaGlobeAmericas className="hover:text-blue-600 transition-colors" />
//           <FaHiking className="hover:text-blue-600 transition-colors" />
//         </div>
//       </div>

//       {/* Featured Destinations - New Section */}
//       <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
//         {featuredDestinations.map((dest) => (
//           <div key={dest.name} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-sm font-semibold">{dest.name}</h3>
//               <span className="text-sm text-blue-600">{dest.price}</span>
//             </div>
//             <div className="flex items-center text-yellow-400 text-xs">
//               <FaStar />
//               <span className="ml-1 text-gray-600">{dest.rating}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Quick Stats - New Section */}
//       <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
//         <div className="grid grid-cols-4 gap-4 text-center">
//           <div>
//             <FaHotel className="text-blue-500 text-xl mx-auto" />
//             <p className="text-xs mt-1">500+ Hotels</p>
//           </div>
//           <div>
//             <FaUsers className="text-blue-500 text-xl mx-auto" />
//             <p className="text-xs mt-1">10k+ Travelers</p>
//           </div>
//           <div>
//             <FaCompass className="text-blue-500 text-xl mx-auto" />
//             <p className="text-xs mt-1">100+ Destinations</p>
//           </div>
//           <div>
//             <FaPlane className="text-blue-500 text-xl mx-auto" />
//             <p className="text-xs mt-1">24/7 Support</p>
//           </div>
//         </div>
//       </div>

//       {/* Analytics Section - More Compact */}
//       <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
//         <h2 className="text-lg font-semibold text-gray-700 mb-4">Travel Insights</h2>
//         <ResponsiveContainer width="100%" height={200}>
//           <LineChart data={yearlyData}>
//             <XAxis dataKey="year" stroke="#718096" tick={{ fontSize: 12 }} />
//             <YAxis stroke="#718096" tick={{ fontSize: 12 }} />
//             <Tooltip />
//             <Line type="monotone" dataKey="hotelsAdded" stroke="#3182CE" strokeWidth={2} />
//             <Line type="monotone" dataKey="customerSatisfaction" stroke="#48BB78" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Booking and Payment - Combined Section */}
//       <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-6">
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h2 className="text-lg font-semibold text-gray-700 mb-3">Quick Booking</h2>
//           <button
//             onClick={handleBooking}
//             className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition-colors w-full"
//           >
//             Book Now
//           </button>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//           <h2 className="text-lg font-semibold text-gray-700 mb-3">Secure Payment</h2>
//           <button
//             onClick={handlePayment}
//             className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
//           >
//             Pay Securely
//           </button>
//         </div>
//       </div>

//       {/* Contact and Weather - Combined Footer */}
//       <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
//         <div className="grid md:grid-cols-3 gap-4">
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt className="text-blue-500" />
//             <span className="text-xs">+1 (555) 123-4567</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaEnvelope className="text-blue-500" />
//             <span className="text-xs">support@wanderlust.com</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaCloudSun className="text-yellow-500" />
//             <span className="text-xs">Weather Updates Available</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { 
  FaMapMarkedAlt, FaGlobeAmericas, FaHiking, FaStar, 
  FaUsers, FaHotel, FaCloudSun, FaPlane, FaCompass,
  FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaCheck,
  FaUmbrellaBeach, FaMountain, FaCity
} from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const yearlyData = [
  { year: "2020", hotelsAdded: 50, priceComparison: 100, customerSatisfaction: 85 },
  { year: "2021", hotelsAdded: 80, priceComparison: 120, customerSatisfaction: 88 },
  { year: "2022", hotelsAdded: 100, priceComparison: 140, customerSatisfaction: 92 },
  { year: "2023", hotelsAdded: 150, priceComparison: 160, customerSatisfaction: 95 },
];

const featuredDestinations = [
  { name: "Bali Paradise", price: "$1,299", rating: 4.8, type: "Beach Retreat" },
  { name: "Swiss Alps", price: "$2,499", rating: 4.9, type: "Mountain Adventure" },
  { name: "Maldives Retreat", price: "$3,299", rating: 4.7, type: "Luxury Escape" },
];

const travelStyles = [
  { icon: FaUmbrellaBeach, title: "Beach Getaways", description: "Pristine shores and crystal waters" },
  { icon: FaMountain, title: "Mountain Expeditions", description: "Challenging peaks and scenic views" },
  { icon: FaCity, title: "Cultural Immersion", description: "Local traditions and heritage" },
];

const Home = () => {
  const handleBooking = () => {
    alert("Booking confirmed! Details sent to the hotel.");
  };

  const handlePayment = () => {
    alert("Payment processing via Razorpay...");
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen px-4 py-6">
      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-blue-600">Wanderlust Travels</h1>
        <p className="text-sm mt-2 text-gray-600">Curated Experiences • Luxury Stays • Memorable Adventures</p>
        <div className="flex justify-center gap-6 mt-4 text-4xl text-blue-500">
          <FaMapMarkedAlt className="hover:text-blue-600 transition-colors" />
          <FaGlobeAmericas className="hover:text-blue-600 transition-colors" />
          <FaHiking className="hover:text-blue-600 transition-colors" />
        </div>
      </div>

      {/* Overview Section - New */}
      <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Your Journey Begins Here</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          At Wanderlust Travels, we craft extraordinary journeys tailored to your wanderlust spirit. Our expert guides 
          and meticulously planned itineraries ensure a seamless blend of adventure, comfort, and authentic experiences.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {[
            "Personalized Itineraries",
            "Add Your Yearly Trip Details",
            "Book Your Luxury  Accommodations",
            "24/7 Travel Support",
            "Weather Report",
            "Payment Gateway"
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm">
              <FaCheck className="text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Styles - New Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Travel Your Way</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {travelStyles.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <Icon className="text-blue-500 text-2xl mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-gray-700 mb-1">{title}</h3>
              <p className="text-xs text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
        {featuredDestinations.map((dest) => (
          <div key={dest.name} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold">{dest.name}</h3>
              <span className="text-sm text-blue-600">{dest.price}</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">{dest.type}</p>
            <div className="flex items-center text-yellow-400 text-xs">
              <FaStar />
              <span className="ml-1 text-gray-600">{dest.rating}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <FaHotel className="text-blue-500 text-xl mx-auto" />
            <p className="text-xs mt-1">500+ Premium Hotels</p>
          </div>
          <div>
            <FaUsers className="text-blue-500 text-xl mx-auto" />
            <p className="text-xs mt-1">10k+ Happy Travelers</p>
          </div>
          <div>
            <FaCompass className="text-blue-500 text-xl mx-auto" />
            <p className="text-xs mt-1">100+ Unique Destinations</p>
          </div>
          <div>
            <FaPlane className="text-blue-500 text-xl mx-auto" />
            <p className="text-xs mt-1">24/7 Expert Support</p>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Our Growth Story</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={yearlyData}>
            <XAxis dataKey="year" stroke="#718096" tick={{ fontSize: 12 }} />
            <YAxis stroke="#718096" tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="hotelsAdded" stroke="#3182CE" strokeWidth={2} />
            <Line type="monotone" dataKey="customerSatisfaction" stroke="#48BB78" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Booking and Payment */}
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Start Your Journey</h2>
          <p className="text-xs text-gray-600 mb-3">Book your dream vacation with our easy-to-use platform</p>
          <button
            onClick={handleBooking}
            className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition-colors w-full"
          >
            Book Now
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Secure Payment</h2>
          <p className="text-xs text-gray-600 mb-3">Safe and secure payments with multiple options</p>
          <button
            onClick={handlePayment}
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
          >
            Pay Securely
          </button>
        </div>
      </div>

      {/* Contact and Weather */}
      <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-500" />
            <span className="text-xs">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <span className="text-xs">support@wanderlust.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCloudSun className="text-yellow-500" />
            <span className="text-xs">Real-time Weather Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;