// PriceFilter.js

import React, { useState } from 'react';

const PriceFilter = ({ setFilteredProducts, products }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000); // Set a default maximum price, adjust as needed

  const handleFilter = () => {
    const filtered = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h5>Filter by Price</h5>
      <div>
        <label>Min Price:</label>
        <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </div>
      <div>
        <label>Max Price:</label>
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default PriceFilter;
