import React from 'react'
import { brands } from '../../../../data/brands/brands'
import { data } from '../../../../data/clothing/data'

import './Brands.scss'

const Brands = ({ categoryId, addFilter, resetFilter }) => {
  // const categoryBrands = data
  //   .filter((item, index) => {
  //     brands.includes(item.brand) && item.categories === categoryId
  //     return
  //   })
  //   .map((item) => item.brand)

  // console.log(categoryBrands)

  return (
    <div className="filter-item">
      <input type="radio" name="brand" id="allBrands" onChange={resetFilter} />
      <label htmlFor="allBrands">
        <h2>ALL DESIGNERS</h2>
      </label>
      {brands[categoryId].map((brand, index) => (
        <div className="filter-input" key={index}>
          <input
            type="radio"
            name="brand"
            id={index + 5}
            value={brand}
            onChange={addFilter}
          />
          <label htmlFor={index + 5}>{brand}</label>
        </div>
      ))}
    </div>
  )
}

export default Brands
