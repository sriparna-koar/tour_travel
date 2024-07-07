// import React from 'react';
// import './Home.css'; // Import a CSS file for styling

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="background-container">
//         <div className="background-overlay"></div>
//         <video className="background-video" autoPlay muted loop>
//           <source src="background.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div className="content-container">
//         <div className="banner">
//           <h1>Welcome to Wanderlust Travels!</h1>
//           <p>Your Gateway to Unforgettable Adventures</p>

//         </div>
//         <div className="trip-info">
//           <img className="tour-travel-logo" src="tour_travel_logo.jpeg" alt="Tour Travel Logo" />
//           <div className="trip-description">
//             <h2 className="explore-heading">Explore Our Trips</h2>
//             <p className="trip-paragraph">Embark on a journey to discover breathtaking destinations across the globe. Whether you crave adrenaline-pumping adventures, serene escapes, or cultural immersions, Wanderlust Travels has the perfect expedition for you.</p>
//             <p className="trip-paragraph">Our expert guides and meticulously crafted itineraries ensure a seamless and enriching travel experience. Let us be your compass as you navigate through the wonders of the world.</p>
//           </div>
//         </div>
//         <div className="gallery-container">
//           <h2 className="gallery-heading">Popular Destinations</h2>
//           <div className="gallery">
//             <div className="gallery-item">
//               <img src="destination1.jpg" alt="Destination 1" />
//               <div className="gallery-item-info">
//                 <h3>Destination 1</h3>
//                 <p>A brief description of the destination.</p>
//               </div>
//             </div>
//             <div className="gallery-item">
//               <img src="destination2.jpg" alt="Destination 2" />
//               <div className="gallery-item-info">
//                 <h3>Destination 2</h3>
//                 <p>A brief description of the destination.</p>
//               </div>
//             </div>
//             <div className="gallery-item">
//               <img src="destination3.jpg" alt="Destination 3" />
//               <div className="gallery-item-info">
//                 <h3>Destination 3</h3>
//                 <p>A brief description of the destination.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="testimonial-container">
//           <h2 className="testimonial-heading">What Our Clients Say</h2>
//           <div className="testimonials">
//             <div className="testimonial">
//               <p>"An amazing experience! The trip was well organized and the guides were fantastic. Highly recommend Wanderlust Travels!"</p>
//               <h3>- Client Name</h3>
//             </div>
//             <div className="testimonial">
//               <p>"A perfect mix of adventure and relaxation. Every detail was taken care of. Thank you for an unforgettable trip!"</p>
//               <h3>- Client Name</h3>
//             </div>
//             <div className="testimonial">
//               <p>"From booking to the end of the trip, everything was seamless. Can't wait for my next adventure with Wanderlust Travels."</p>
//               <h3>- Client Name</h3>
//             </div>
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
        <video className="background-video" autoPlay muted loop>
          <source src="background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-container">
        <div className="banner">
          <h1>Welcome to Wanderlust Travels!</h1>
          <p>Your Gateway to Unforgettable Adventures</p>
          {/* <video className="background-video" autoPlay muted loop>
          <source src="background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
             <img src="destination1.jpg" alt="Destination 1" />
        </div>
        <div className="trip-info">
          {/* <img className="tour-travel-logo" src="tour_travel_logo.jpeg" alt="Tour Travel Logo" /> */}
          <div className="trip-description">
            <h2 className="explore-heading">Explore Our Trips</h2>
            <p className="trip-paragraph">Embark on a journey to discover breathtaking destinations across the globe. Whether you crave adrenaline-pumping adventures, serene escapes, or cultural immersions, Wanderlust Travels has the perfect expedition for you.</p>
            <p className="trip-paragraph">Our expert guides and meticulously crafted itineraries ensure a seamless and enriching travel experience. Let us be your compass as you navigate through the wonders of the world.</p>
          </div>
        </div>
        <div className="gallery-container">
          <h2 className="gallery-heading">Popular Destinations</h2>
          <div className="gallery">
            <div className="gallery-item">
              <img src="tour_travel_logo.jpeg" alt="Destination 1" />
              <div className="gallery-item-info">
                <h3>Destination 1</h3>
                <p>A brief description of the destination.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="tour_travel_logo.jpeg" alt="Destination 2" />
              <div className="gallery-item-info">
                <h3>Destination 2</h3>
                <p>A brief description of the destination.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="tour_travel_logo.jpeg" alt="Destination 3" />
              <div className="gallery-item-info">
                <h3>Destination 3</h3>
                <p>A brief description of the destination.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-container">
          <h2 className="testimonial-heading">What Our Clients Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"An amazing experience! The trip was well organized and the guides were fantastic. Highly recommend Wanderlust Travels!"</p>
              <h3>- Client Name</h3>
            </div>
            <div className="testimonial">
              <p>"A perfect mix of adventure and relaxation. Every detail was taken care of. Thank you for an unforgettable trip!"</p>
              <h3>- Client Name</h3>
            </div>
            <div className="testimonial">
              <p>"From booking to the end of the trip, everything was seamless. Can't wait for my next adventure with Wanderlust Travels."</p>
              <h3>- Client Name</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
