// HotelListing.js
import React, { useState, useEffect } from 'react';
import './styles.css';
import propertiesData from './properties.json';
import ImageSlider from './ImageSlider';
import SliderComponent from './Slider';
const HotelListing = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(3);

  useEffect(() => {
    renderProperties();
  }, [activeTab, currentPage]); // Re-render when activeTab or currentPage changes

  const changeTab = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset current page when changing tabs
    renderProperties();
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    renderProperties();
  };

  const navigateToProperty = (propertyId) => {
    // You can use window.location.href or a routing library for navigation
    window.location.href = `/property/${propertyId}`;
  };

  const renderProperties = () => {
    const propertyList = document.querySelector('.property-list');

    const properties = propertiesData.cities[activeTab];
    const startIndex = (currentPage - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    const newProperties = properties.slice(startIndex, endIndex);

    // Clear existing properties
    if (currentPage === 1) {
      propertyList.innerHTML = '';
    }

    newProperties.forEach((property) => {
      // <ImageSlider slides={propertiesData} />
      const propertyCard = document.createElement('div');
      propertyCard.classList.add('property-card');
      propertyCard.innerHTML = `
        <img class="property-image" src="${property.image}" alt="${property.name}">
        <div class="property-details">
          <h3>${property.name}</h3>
          <p>City ${property.city}</p>
        </div>
      `;
      propertyCard.onclick = () => navigateToProperty(property.id);

      propertyList.appendChild(propertyCard);
    });
  };

  return (
    <div>
      <header>
        <h1>Hotel Listing</h1>
      </header>

      <div className="tabs">
        {[1, 2, 3, 4].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => changeTab(tab)}
          >
            City {tab}
          </div>
        ))}
      </div>

      <div className="property-list">{/* Property cards will be dynamically generated here */}</div>

      <div className="show-more" onClick={loadMore}>
        Show More
      </div>
    </div>
  );
};

export default HotelListing;
