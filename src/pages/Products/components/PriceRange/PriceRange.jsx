import React from 'react'

const PriceRange = ({ maxPrice, setMaxPrice }) => {
  return (
    <div className="filter-item">
      <h2>PRICE RANGE</h2>
      <div className="input-item">
        <span>$0</span>
        <input
          className="price-range"
          type="range"
          defaultValue={1500}
          min={0}
          max={1500}
          onChange={setMaxPrice}
        />
        <span>$1500</span>
      </div>
    </div>
  )
}

export default PriceRange
