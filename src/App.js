

//   // HotelListing.js
// import React, { useState, useEffect } from 'react';
// import './styles.css';

// const App = () => {
//   const [activeTab, setActiveTab] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [propertiesPerPage] = useState(3);
//   const [shuffledProperties, setShuffledProperties] = useState([]);



//   const cityProperties = {
//     1: [
//       { id: 1, city: 1, name: 'Hotel 1', image: 'image1.jpg' },
//       { id: 2, city: 1, name: 'Hotel 2', image: 'image2.jpg' },
//       { id: 3, city: 1, name: 'Hotel 3', image: 'image3.jpg' },
//       { id: 4, city: 1, name: 'Hotel 4', image: 'image4.jpg' },
//       { id: 5, city: 1, name: 'Hotel 5', image: 'image5.jpg' },
//       { id: 6, city: 1, name: 'Hotel 6', image: 'image6.jpg' },
//     ],
//     2: [
//       { id: 7, city: 2, name: 'Hotel 7', image: 'image7.jpg' },
//       { id: 8, city: 2, name: 'Hotel 8', image: 'image8.jpg' },
//       { id: 9, city: 2, name: 'Hotel 9', image: 'image9.jpg' },
//       { id: 10, city: 2, name: 'Hotel 10', image: 'image10.jpg' },
//       { id: 11, city: 2, name: 'Hotel 11', image: 'image11.jpg' },
//       { id: 12, city: 2, name: 'Hotel 12', image: 'image12.jpg' },
//     ],
//     3: [
//       { id: 13, city: 3, name: 'Hotel 13', image: 'image13.jpg' },
//       { id: 14, city: 3, name: 'Hotel 14', image: 'image14.jpg' },
//       { id: 15, city: 3, name: 'Hotel 15', image: 'image15.jpg' },
//       { id: 16, city: 3, name: 'Hotel 16', image: 'image16.jpg' },
//       { id: 17, city: 3, name: 'Hotel 17', image: 'image17.jpg' },
//       { id: 18, city: 3, name: 'Hotel 18', image: 'image18.jpg' },
//     ],
//     4: [
//       { id: 19, city: 4, name: 'Hotel 19', image: 'image19.jpg' },
//       { id: 20, city: 4, name: 'Hotel 20', image: 'image20.jpg' },
//       { id: 21, city: 4, name: 'Hotel 21', image: 'image21.jpg' },
//       { id: 22, city: 4, name: 'Hotel 22', image: 'image22.jpg' },
//       { id: 23, city: 4, name: 'Hotel 23', image: 'image23.jpg' },
//       { id: 24, city: 4, name: 'Hotel 24', image: 'image24.jpg' },
//     ],
//   };

//   useEffect(() => {
//     updateActiveTabStyle();
//     shuffleProperties();
//     renderProperties();
//   }, [activeTab, currentPage]); // Re-render when activeTab or currentPage changes

//   const shuffleProperties = () => {
//     setShuffledProperties(shuffleArray(cityProperties[activeTab]));
//   };

//   const changeTab = (tab) => {
//     setActiveTab(tab);
//     setCurrentPage(1); // Reset current page when changing tabs
//     shuffleProperties(); // Shuffle properties when changing tabs
//     renderProperties();
//   };

//   const loadMore = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//     renderProperties();
//   };

//   const updateActiveTabStyle = () => {
//     const tabs = document.querySelectorAll('.tab');
//     tabs.forEach((tab) => tab.classList.remove('active'));
//     document.querySelector(`.tab:nth-child(${activeTab})`).classList.add('active');
//   };

//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   const navigateToProperty = (propertyId) => {
//     // You can use window.location.href or a routing library for navigation
//     window.location.href = `/property/${propertyId}`;
//   };

//   const renderProperties = () => {
//     const propertyList = document.querySelector('.property-list');

//     const startIndex = (currentPage - 1) * propertiesPerPage;
//     const endIndex = startIndex + propertiesPerPage;
//     const newProperties = shuffledProperties.slice(startIndex, endIndex);

//     newProperties.forEach((property) => {
//       const propertyCard = document.createElement('div');
//       propertyCard.classList.add('property-card');
//       propertyCard.innerHTML = `
//         <img class="property-image" src="${property.image}" alt="${property.name}">
//         <div class="property-details">
//           <h3>${property.name}</h3>
//           <p>City ${property.city}</p>
//         </div>
//       `;
//       propertyCard.onclick = () => navigateToProperty(property.id);

//       propertyList.appendChild(propertyCard);
//     });
//   };

//   return (
//     <div>
//       <header>
//         <h1>Hotel Listing</h1>
//       </header>

//       <div className="tabs">
//         {[1, 2, 3, 4].map((tab) => (
//           <div
//             key={tab}
//             className={`tab ${activeTab === tab ? 'active' : ''}`}
//             onClick={() => changeTab(tab)}
//           >
//             City {tab}
//           </div>
//         ))}
//       </div>

//       <div className="property-list">{/* Property cards will be dynamically generated here */}</div>

//       <div className="show-more" onClick={() => loadMore()}>
//         Show More
//       </div>
//     </div>
//   );
// };


// export default App;



// App.js
import React from 'react';
import HotelListing from './HotelListing';

function App() {
  return (
    <div className="App">
      <HotelListing />
    </div>
  );
}

export default App;
