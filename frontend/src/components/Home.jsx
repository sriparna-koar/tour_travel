// import React from 'react';
// import './Home.css'; // Import a CSS file for styling

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="background-container">
//         <div className="background-overlay"></div>
//       </div>
//       <div className="content-container">
//         <div className="banner">
//           <h1>Welcome to Wanderlust Travels!</h1>
//           <p>Your Gateway to Unforgettable Adventures</p>
//         </div>
//         <div className="trip-info">
//           <img src="tour_travel_logo.jpeg" alt="Tour Travel Logo" />
//           <div className="trip-description">
//             <h2>Explore Our Trips</h2>
//             <p>Embark on a journey to discover breathtaking destinations across the globe. Whether you crave adrenaline-pumping adventures, serene escapes, or cultural immersions, Wanderlust Travels has the perfect expedition for you.</p>
//             <p>Our expert guides and meticulously crafted itineraries ensure a seamless and enriching travel experience. Let us be your compass as you navigate through the wonders of the world.</p>
//             <button className="explore-btn">Start Exploring</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import './Home.css'; // Import a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-container">
        <div className="background-overlay"></div>
      </div>
      <div className="content-container">
        <div className="banner">
          <h1>Welcome to Wanderlust Travels!</h1>
          <p>Your Gateway to Unforgettable Adventures</p>
        </div>
        <div className="trip-info">
          <img className="tour-travel-logo" src="tour_travel_logo.jpeg" alt="Tour Travel Logo" />
          <div className="trip-description">
            <h2 className="explore-heading">Explore Our Trips</h2>
            <p className="trip-paragraph">Embark on a journey to discover breathtaking destinations across the globe. Whether you crave adrenaline-pumping adventures, serene escapes, or cultural immersions, Wanderlust Travels has the perfect expedition for you.</p>
            <p className="trip-paragraph">Our expert guides and meticulously crafted itineraries ensure a seamless and enriching travel experience. Let us be your compass as you navigate through the wonders of the world.</p>
            <button className="explore-btn">Start Exploring</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
