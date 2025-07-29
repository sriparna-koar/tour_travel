
// // import React from "react";
// // import { 
// //   FaMapMarkedAlt, FaGlobeAmericas, FaHiking, FaStar, 
// //   FaUsers, FaHotel, FaCloudSun, FaPlane, FaCompass,
// //   FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaCheck,
// //   FaUmbrellaBeach, FaMountain, FaCity
// // } from "react-icons/fa";
// // import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// // const yearlyData = [
// //   { year: "2020", hotelsAdded: 50, priceComparison: 100, customerSatisfaction: 85 },
// //   { year: "2021", hotelsAdded: 80, priceComparison: 120, customerSatisfaction: 88 },
// //   { year: "2022", hotelsAdded: 100, priceComparison: 140, customerSatisfaction: 92 },
// //   { year: "2023", hotelsAdded: 150, priceComparison: 160, customerSatisfaction: 95 },
// // ];

// // const featuredDestinations = [
// //   { name: "Bali Paradise", price: "$1,299", rating: 4.8, type: "Beach Retreat" },
// //   { name: "Swiss Alps", price: "$2,499", rating: 4.9, type: "Mountain Adventure" },
// //   { name: "Maldives Retreat", price: "$3,299", rating: 4.7, type: "Luxury Escape" },
// // ];

// // const travelStyles = [
// //   { icon: FaUmbrellaBeach, title: "Beach Getaways", description: "Pristine shores and crystal waters" },
// //   { icon: FaMountain, title: "Mountain Expeditions", description: "Challenging peaks and scenic views" },
// //   { icon: FaCity, title: "Cultural Immersion", description: "Local traditions and heritage" },
// // ];

// // const Home = () => {
// //   const handleBooking = () => {
// //     alert("Booking confirmed! Details sent to the hotel.");
// //   };

// //   const handlePayment = () => {
// //     alert("Payment processing via Razorpay...");
// //   };

// //   return (
// //     <div className="bg-gray-50 text-gray-800 min-h-screen px-4 py-6">
// //       {/* Hero Section */}
// //       <div className="text-center py-8">
// //         <h1 className="text-3xl font-bold text-blue-600">Wanderlust Travels</h1>
// //         <p className="text-sm mt-2 text-gray-600">Curated Experiences • Luxury Stays • Memorable Adventures</p>
// //         <div className="flex justify-center gap-6 mt-4 text-4xl text-blue-500">
// //           <FaMapMarkedAlt className="hover:text-blue-600 transition-colors" />
// //           <FaGlobeAmericas className="hover:text-blue-600 transition-colors" />
// //           <FaHiking className="hover:text-blue-600 transition-colors" />
// //         </div>
// //       </div>

// //       {/* Overview Section - New */}
// //       <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
// //         <h2 className="text-lg font-semibold text-gray-700 mb-3">Your Journey Begins Here</h2>
// //         <p className="text-sm text-gray-600 leading-relaxed mb-4">
// //           At Wanderlust Travels, we craft extraordinary journeys tailored to your wanderlust spirit. Our expert guides 
// //           and meticulously planned itineraries ensure a seamless blend of adventure, comfort, and authentic experiences.
// //         </p>
// //         <div className="grid md:grid-cols-3 gap-4 mt-4">
// //           {[
// //             "Personalized Itineraries",
// //             "Add Your Yearly Trip Details",
// //             "Book Your Luxury  Accommodations",
// //             "24/7 Travel Support",
// //             "Weather Report",
// //             "Payment Gateway"
// //           ].map((feature) => (
// //             <div key={feature} className="flex items-center gap-2 text-sm">
// //               <FaCheck className="text-green-500 flex-shrink-0" />
// //               <span className="text-gray-700">{feature}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Travel Styles - New Section */}
// //       <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
// //         <h2 className="text-lg font-semibold text-gray-700 mb-4">Travel Your Way</h2>
// //         <div className="grid md:grid-cols-3 gap-6">
// //           {travelStyles.map(({ icon: Icon, title, description }) => (
// //             <div key={title} className="text-center">
// //               <Icon className="text-blue-500 text-2xl mx-auto mb-2" />
// //               <h3 className="text-sm font-semibold text-gray-700 mb-1">{title}</h3>
// //               <p className="text-xs text-gray-600">{description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Featured Destinations */}
// //       <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
// //         {featuredDestinations.map((dest) => (
// //           <div key={dest.name} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
// //             <div className="flex justify-between items-center mb-2">
// //               <h3 className="text-sm font-semibold">{dest.name}</h3>
// //               <span className="text-sm text-blue-600">{dest.price}</span>
// //             </div>
// //             <p className="text-xs text-gray-500 mb-2">{dest.type}</p>
// //             <div className="flex items-center text-yellow-400 text-xs">
// //               <FaStar />
// //               <span className="ml-1 text-gray-600">{dest.rating}</span>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Quick Stats */}
// //       <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
// //         <div className="grid grid-cols-4 gap-4 text-center">
// //           <div>
// //             <FaHotel className="text-blue-500 text-xl mx-auto" />
// //             <p className="text-xs mt-1">500+ Premium Hotels</p>
// //           </div>
// //           <div>
// //             <FaUsers className="text-blue-500 text-xl mx-auto" />
// //             <p className="text-xs mt-1">10k+ Happy Travelers</p>
// //           </div>
// //           <div>
// //             <FaCompass className="text-blue-500 text-xl mx-auto" />
// //             <p className="text-xs mt-1">100+ Unique Destinations</p>
// //           </div>
// //           <div>
// //             <FaPlane className="text-blue-500 text-xl mx-auto" />
// //             <p className="text-xs mt-1">24/7 Expert Support</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Analytics Section */}
// //       <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
// //         <h2 className="text-lg font-semibold text-gray-700 mb-4">Our Growth Story</h2>
// //         <ResponsiveContainer width="100%" height={200}>
// //           <LineChart data={yearlyData}>
// //             <XAxis dataKey="year" stroke="#718096" tick={{ fontSize: 12 }} />
// //             <YAxis stroke="#718096" tick={{ fontSize: 12 }} />
// //             <Tooltip />
// //             <Line type="monotone" dataKey="hotelsAdded" stroke="#3182CE" strokeWidth={2} />
// //             <Line type="monotone" dataKey="customerSatisfaction" stroke="#48BB78" strokeWidth={2} />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       </div>

// //       {/* Booking and Payment */}
// //       <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-6">
// //         <div className="bg-white p-6 rounded-lg shadow-sm">
// //           <h2 className="text-lg font-semibold text-gray-700 mb-3">Start Your Journey</h2>
// //           <p className="text-xs text-gray-600 mb-3">Book your dream vacation with our easy-to-use platform</p>
// //           <button
// //             onClick={handleBooking}
// //             className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition-colors w-full"
// //           >
// //             Book Now
// //           </button>
// //         </div>
// //         <div className="bg-white p-6 rounded-lg shadow-sm">
// //           <h2 className="text-lg font-semibold text-gray-700 mb-3">Secure Payment</h2>
// //           <p className="text-xs text-gray-600 mb-3">Safe and secure payments with multiple options</p>
// //           <button
// //             onClick={handlePayment}
// //             className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
// //           >
// //             Pay Securely
// //           </button>
// //         </div>
// //       </div>

// //       {/* Contact and Weather */}
// //       <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto mt-6">
// //         <div className="grid md:grid-cols-3 gap-4">
// //           <div className="flex items-center gap-2">
// //             <FaPhoneAlt className="text-blue-500" />
// //             <span className="text-xs">+1 (555) 123-4567</span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <FaEnvelope className="text-blue-500" />
// //             <span className="text-xs">support@wanderlust.com</span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <FaCloudSun className="text-yellow-500" />
// //             <span className="text-xs">Real-time Weather Updates</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useState } from 'react';
// import { 
//   FaHome, FaUserPlus, FaSignInAlt, FaPlus, FaList, 
//   FaHotel, FaSearch, FaCloudSun, FaBars, FaTimes,
//   FaMapMarkedAlt, FaGlobeAmericas, FaHiking, FaStar, 
//   FaUsers, FaCompass, FaPlane, FaCheck, FaUmbrellaBeach, 
//   FaMountain, FaCity, FaCalendarAlt, FaPhoneAlt, FaEnvelope,
//   FaRocket, FaGem, FaShieldAlt, FaHeadset
// } from "react-icons/fa";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// // Sample data
// const yearlyData = [
//   { year: "2020", hotelsAdded: 50, priceComparison: 100, customerSatisfaction: 85 },
//   { year: "2021", hotelsAdded: 80, priceComparison: 120, customerSatisfaction: 88 },
//   { year: "2022", hotelsAdded: 100, priceComparison: 140, customerSatisfaction: 92 },
//   { year: "2023", hotelsAdded: 150, priceComparison: 160, customerSatisfaction: 95 },
// ];

// const featuredDestinations = [
//   { name: "Bali Paradise", price: "$1,299", rating: 4.8, type: "Beach Retreat", image: "/api/placeholder/300/200" },
//   { name: "Swiss Alps", price: "$2,499", rating: 4.9, type: "Mountain Adventure", image: "/api/placeholder/300/200" },
//   { name: "Maldives Retreat", price: "$3,299", rating: 4.7, type: "Luxury Escape", image: "/api/placeholder/300/200" },
// ];

// const travelStyles = [
//   { icon: FaUmbrellaBeach, title: "Beach Getaways", description: "Pristine shores and crystal waters", color: "text-blue-500" },
//   { icon: FaMountain, title: "Mountain Expeditions", description: "Challenging peaks and scenic views", color: "text-green-500" },
//   { icon: FaCity, title: "Cultural Immersion", description: "Local traditions and heritage", color: "text-purple-500" },
// ];

// const features = [
//   { icon: FaRocket, title: "Fast Booking", description: "Book in under 60 seconds" },
//   { icon: FaGem, title: "Premium Experiences", description: "Curated luxury destinations" },
//   { icon: FaShieldAlt, title: "Secure Payments", description: "100% safe transactions" },
//   { icon: FaHeadset, title: "24/7 Support", description: "Round-the-clock assistance" },
// ];

// // Navbar Component
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { icon: FaHome, label: "Home", href: "/" },
//     { icon: FaUserPlus, label: "Sign Up", href: "/signup" },
//     { icon: FaSignInAlt, label: "Login", href: "/login" },
//     { icon: FaPlus, label: "Add Trip", href: "/addtrip" },
//     { icon: FaList, label: "All Trips", href: "/alltrip" },
//     { icon: FaHotel, label: "Hotels", href: "/hotels" },
//     { icon: FaSearch, label: "Search", href: "/search" },
//     { icon: FaCloudSun, label: "Weather", href: "/weather" },
//   ];

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <FaGlobeAmericas className="text-2xl text-blue-600" />
//             <span className="text-xl font-bold text-gray-800">Wanderlust</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
//               >
//                 <item.icon className="text-sm" />
//                 <span>{item.label}</span>
//               </a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//             >
//               {isMenuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <item.icon />
//                   <span>{item.label}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// // Main Home Component
// const Home = () => {
//   const handleBooking = () => {
//     alert("Booking confirmed! Details sent to the hotel.");
//   };

//   const handlePayment = () => {
//     alert("Payment processing via Razorpay...");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <Navbar />
      
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//             Discover Your Next
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
//               Adventure
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
//             Curated Experiences • Luxury Stays • Unforgettable Journeys
//           </p>
//           <div className="flex justify-center gap-8 mb-12">
//             <div className="text-center">
//               <FaMapMarkedAlt className="text-4xl mx-auto mb-2 text-yellow-300" />
//               <p className="text-sm">Explore</p>
//             </div>
//             <div className="text-center">
//               <FaGlobeAmericas className="text-4xl mx-auto mb-2 text-green-300" />
//               <p className="text-sm">Discover</p>
//             </div>
//             <div className="text-center">
//               <FaHiking className="text-4xl mx-auto mb-2 text-orange-300" />
//               <p className="text-sm">Adventure</p>
//             </div>
//           </div>
//           <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//             Start Your Journey
//           </button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Wanderlust?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experience travel like never before with our innovative platform designed for modern explorers
//             </p>
//           </div>
//           <div className="grid md:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <feature.icon className="text-2xl text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Travel Styles */}
//       <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel Your Way</h2>
//             <p className="text-xl text-gray-600">Choose your adventure style</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {travelStyles.map((style, index) => (
//               <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                 <div className={`text-4xl mb-4 ${style.color}`}>
//                   <style.icon className="mx-auto" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">{style.title}</h3>
//                 <p className="text-gray-600 text-center">{style.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Featured Destinations */}
//       <div className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
//             <p className="text-xl text-gray-600">Handpicked locations for your dream vacation</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {featuredDestinations.map((dest, index) => (
//               <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                 <div className="relative h-48 overflow-hidden">
//                   <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
//                   <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
//                     <span className="text-sm font-semibold text-blue-600">{dest.price}</span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{dest.name}</h3>
//                   <p className="text-gray-600 mb-3">{dest.type}</p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center text-yellow-400">
//                       <FaStar className="mr-1" />
//                       <span className="text-gray-600 font-medium">{dest.rating}</span>
//                     </div>
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Statistics */}
//       <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div className="transform hover:scale-105 transition-transform">
//               <FaHotel className="text-4xl mx-auto mb-4 text-yellow-300" />
//               <h3 className="text-3xl font-bold mb-2">500+</h3>
//               <p className="text-blue-100">Premium Hotels</p>
//             </div>
//             <div className="transform hover:scale-105 transition-transform">
//               <FaUsers className="text-4xl mx-auto mb-4 text-green-300" />
//               <h3 className="text-3xl font-bold mb-2">10K+</h3>
//               <p className="text-blue-100">Happy Travelers</p>
//             </div>
//             <div className="transform hover:scale-105 transition-transform">
//               <FaCompass className="text-4xl mx-auto mb-4 text-orange-300" />
//               <h3 className="text-3xl font-bold mb-2">100+</h3>
//               <p className="text-blue-100">Destinations</p>
//             </div>
//             <div className="transform hover:scale-105 transition-transform">
//               <FaPlane className="text-4xl mx-auto mb-4 text-pink-300" />
//               <h3 className="text-3xl font-bold mb-2">24/7</h3>
//               <p className="text-blue-100">Support</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Analytics Section */}
//       <div className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="bg-white p-8 rounded-2xl shadow-lg">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Growth Journey</h2>
//             <div className="h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={yearlyData}>
//                   <XAxis dataKey="year" stroke="#718096" tick={{ fontSize: 14 }} />
//                   <YAxis stroke="#718096" tick={{ fontSize: 14 }} />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="hotelsAdded" stroke="#3182CE" strokeWidth={3} />
//                   <Line type="monotone" dataKey="customerSatisfaction" stroke="#48BB78" strokeWidth={3} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
//               <p className="mb-6 text-green-100">Book your dream vacation with our easy-to-use platform and start creating memories that last a lifetime.</p>
//               <button
//                 onClick={handleBooking}
//                 className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
//               >
//                 Book Your Adventure
//               </button>
//             </div>
//             <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white shadow-lg">
//               <h3 className="text-2xl font-bold mb-4">Secure Payment</h3>
//               <p className="mb-6 text-blue-100">Experience peace of mind with our secure payment gateway. Multiple payment options available for your convenience.</p>
//               <button
//                 onClick={handlePayment}
//                 className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
//               >
//                 Pay Securely
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             <div className="flex items-center justify-center space-x-3">
//               <FaPhoneAlt className="text-blue-400" />
//               <span>+1 (555) 123-4567</span>
//             </div>
//             <div className="flex items-center justify-center space-x-3">
//               <FaEnvelope className="text-blue-400" />
//               <span>support@wanderlust.com</span>
//             </div>
//             <div className="flex items-center justify-center space-x-3">
//               <FaCloudSun className="text-yellow-400" />
//               <span>Real-time Weather Updates</span>
//             </div>
//           </div>
//           <div className="text-center mt-8 pt-8 border-t border-gray-700">
//             <p className="text-gray-400">&copy; 2024 Wanderlust Travels. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { 
  FaHome, FaUserPlus, FaSignInAlt, FaPlus, FaList, 
  FaHotel, FaSearch, FaCloudSun, FaBars, FaTimes,
  FaMapMarkedAlt, FaGlobeAmericas, FaHiking, FaStar, 
  FaUsers, FaCompass, FaPlane, FaCheck, FaUmbrellaBeach, 
  FaMountain, FaCity, FaCalendarAlt, FaPhoneAlt, FaEnvelope,
  FaRocket, FaGem, FaShieldAlt, FaHeadset
} from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Sample data
const yearlyData = [
  { year: "2020", hotelsAdded: 50, priceComparison: 100, customerSatisfaction: 85 },
  { year: "2021", hotelsAdded: 80, priceComparison: 120, customerSatisfaction: 88 },
  { year: "2022", hotelsAdded: 100, priceComparison: 140, customerSatisfaction: 92 },
  { year: "2023", hotelsAdded: 150, priceComparison: 160, customerSatisfaction: 95 },
];

const featuredDestinations = [
  { name: "Bali Paradise", price: "$1,299", rating: 4.8, type: "Beach Retreat", image: "/api/placeholder/300/200" },
  { name: "Swiss Alps", price: "$2,499", rating: 4.9, type: "Mountain Adventure", image: "/api/placeholder/300/200" },
  { name: "Maldives Retreat", price: "$3,299", rating: 4.7, type: "Luxury Escape", image: "/api/placeholder/300/200" },
];

const travelStyles = [
  { icon: FaUmbrellaBeach, title: "Beach Getaways", description: "Pristine shores and crystal waters", color: "text-blue-500" },
  { icon: FaMountain, title: "Mountain Expeditions", description: "Challenging peaks and scenic views", color: "text-green-500" },
  { icon: FaCity, title: "Cultural Immersion", description: "Local traditions and heritage", color: "text-purple-500" },
];

const features = [
  { icon: FaRocket, title: "Fast Booking", description: "Book in under 60 seconds" },
  { icon: FaGem, title: "Premium Experiences", description: "Curated luxury destinations" },
  { icon: FaShieldAlt, title: "Secure Payments", description: "100% safe transactions" },
  { icon: FaHeadset, title: "24/7 Support", description: "Round-the-clock assistance" },
];

// Main Home Component (without Navbar since it's now in App.jsx)
const Home = () => {
  const handleBooking = () => {
    alert("Booking confirmed! Details sent to the hotel.");
  };

  const handlePayment = () => {
    alert("Payment processing via Razorpay...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Curated Experiences • Luxury Stays • Unforgettable Journeys
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <FaMapMarkedAlt className="text-4xl mx-auto mb-2 text-yellow-300" />
              <p className="text-sm">Explore</p>
            </div>
            <div className="text-center">
              <FaGlobeAmericas className="text-4xl mx-auto mb-2 text-green-300" />
              <p className="text-sm">Discover</p>
            </div>
            <div className="text-center">
              <FaHiking className="text-4xl mx-auto mb-2 text-orange-300" />
              <p className="text-sm">Adventure</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Wanderlust?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience travel like never before with our innovative platform designed for modern explorers
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel Styles */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel Your Way</h2>
            <p className="text-xl text-gray-600">Choose your adventure style</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {travelStyles.map((style, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`text-4xl mb-4 ${style.color}`}>
                  <style.icon className="mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">{style.title}</h3>
                <p className="text-gray-600 text-center">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
            <p className="text-xl text-gray-600">Handpicked locations for your dream vacation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-sm font-semibold text-blue-600">{dest.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dest.name}</h3>
                  <p className="text-gray-600 mb-3">{dest.type}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-400">
                      <FaStar className="mr-1" />
                      <span className="text-gray-600 font-medium">{dest.rating}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <FaHotel className="text-4xl mx-auto mb-4 text-yellow-300" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Premium Hotels</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <FaUsers className="text-4xl mx-auto mb-4 text-green-300" />
              <h3 className="text-3xl font-bold mb-2">10K+</h3>
              <p className="text-blue-100">Happy Travelers</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <FaCompass className="text-4xl mx-auto mb-4 text-orange-300" />
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-blue-100">Destinations</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <FaPlane className="text-4xl mx-auto mb-4 text-pink-300" />
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-blue-100">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Growth Journey</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yearlyData}>
                  <XAxis dataKey="year" stroke="#718096" tick={{ fontSize: 14 }} />
                  <YAxis stroke="#718096" tick={{ fontSize: 14 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="hotelsAdded" stroke="#3182CE" strokeWidth={3} />
                  <Line type="monotone" dataKey="customerSatisfaction" stroke="#48BB78" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
              <p className="mb-6 text-green-100">Book your dream vacation with our easy-to-use platform and start creating memories that last a lifetime.</p>
              <button
                onClick={handleBooking}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Book Your Adventure
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Secure Payment</h3>
              <p className="mb-6 text-blue-100">Experience peace of mind with our secure payment gateway. Multiple payment options available for your convenience.</p>
              <button
                onClick={handlePayment}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Pay Securely
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <FaPhoneAlt className="text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaEnvelope className="text-blue-400" />
              <span>support@wanderlust.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaCloudSun className="text-yellow-400" />
              <span>Real-time Weather Updates</span>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">&copy; 2024 Wanderlust Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;