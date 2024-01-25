import React from 'react';
import styles from './index.module.scss';
import PropListCard from '../PropListCard';

const AllProperty = () => {
  const propertyData = [
    {
      id: 1,
      imageSrc: '/images/featuredProps/pic1.jpg',
      title: 'Sapphire Residency',
      location: 'Mumbai',
      size: '1800 sft',
      bedrooms: 3,
      readyBy: '2024',
      type: 'Luxury Apartment',
      priceRange: 'STARTING FROM 80L-3CR',
    },
    {
      id: 2,
      imageSrc: '/images/featuredProps/pic2.jpg',
      title: 'Royal Enclave',
      location: 'Bangalore',
      size: '2200 sft',
      bedrooms: 4,
      readyBy: '2023',
      type: 'Villa',
      priceRange: 'STARTING FROM 1.5CR-5CR',
    },
    {
      id: 3,
      imageSrc: '/images/featuredProps/pic3.jpg',
      title: 'Emerald Greens',
      location: 'Delhi',
      size: '1600 sft',
      bedrooms: 2,
      readyBy: '2025',
      type: 'Duplex',
      priceRange: 'STARTING FROM 70L-2.5CR',
    },
    {
      id: 4,
      imageSrc: '/images/featuredProps/pic4.jpg',
      title: 'Golden Harmony',
      location: 'Chennai',
      size: '2000 sft',
      bedrooms: 3,
      readyBy: '2023',
      type: 'Penthouse',
      priceRange: 'STARTING FROM 90L-4CR',
    },
    {
      id: 5,
      imageSrc: '/images/featuredProps/pic1.jpg',
      title: 'Mystic Meadows',
      location: 'Pune',
      size: '1800 sft',
      bedrooms: 2,
      readyBy: '2024',
      type: 'Apartment',
      priceRange: 'STARTING FROM 75L-2.8CR',
    },
    {
      id: 6,
      imageSrc: '/images/featuredProps/pic2.jpg',
      title: 'Silver Springs',
      location: 'Kolkata',
      size: '2100 sft',
      bedrooms: 3,
      readyBy: '2023',
      type: 'Bungalow',
      priceRange: 'STARTING FROM 1.2CR-4.5CR',
    },
    {
      id: 7,
      imageSrc: '/images/featuredProps/pic3.jpg',
      title: 'Green Retreat',
      location: 'Ahmedabad',
      size: '1900 sft',
      bedrooms: 2,
      readyBy: '2024',
      type: 'Independent House',
      priceRange: 'STARTING FROM 85L-3.2CR',
    },
    {
      id: 8,
      imageSrc: '/images/featuredProps/pic4.jpg',
      title: 'Ivory Towers',
      location: 'Jaipur',
      size: '1700 sft',
      bedrooms: 2,
      readyBy: '2025',
      type: 'Flat',
      priceRange: 'STARTING FROM 65L-2.3CR',
    },
    {
      id: 9,
      imageSrc: '/images/featuredProps/pic1.jpg',
      title: 'Rosewood Residences',
      location: 'Lucknow',
      size: '2000 sft',
      bedrooms: 3,
      readyBy: '2023',
      type: 'Luxury Condo',
      priceRange: 'STARTING FROM 95L-3.8CR',
    },
    {
      id: 10,
      imageSrc: '/images/featuredProps/pic2.jpg',
      title: 'Crimson Courtyard',
      location: 'Hyderabad',
      size: '1800 sft',
      bedrooms: 2,
      readyBy: '2024',
      type: 'Townhouse',
      priceRange: 'STARTING FROM 70L-2.6CR',
    },
  ];

  return (
    <div className={styles.main_cont}>
      <div className={styles.search_cont}>
        <div className={styles.filter_type}>
          <label className={styles.type}>Type:</label>
          <select id="type">
            <option value="residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Rent">Rent</option>
            <option value="Investment">Investment</option>
          </select>
        </div>
        <div className={styles.filter_type}>
          <label className={styles.type}>Purpose:</label>
          <select id="purpose">
            <option value="buyhome">Buying a Home</option>
            <option value="Commercial">Commercial</option>
            <option value="Rent">Rent</option>
            <option value="RetirementLiving">Retirement Living</option>
          </select>
        </div>
        <div className={styles.filter_type}>
          <label className={styles.type}>City:</label>
          <input type="text" id="city" placeholder="Enter City" />
        </div>
        <div className={styles.filter_type}>
          <label className={styles.type}>Price From:</label>
          <input type="number" id="priceFrom" placeholder="Min Price" />
        </div>
        <div className={styles.filter_type}>
          <label className={styles.type}>Price To:</label>
          <input type="number" id="priceTo" placeholder="Max Price" />
        </div>
        <div className={styles.btn_cont}>
          <button type="button">Search</button>
        </div>
      </div>
      <div className={styles.prop_cont}>
        <div className={styles.prop_cont}>
          {propertyData.map((property) => (
            <PropListCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProperty;
