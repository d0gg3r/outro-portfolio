import React from 'react'

import { subCategories } from '../../../../data/subCategories/subCategories'

const Categories = ({ categoryId, resetFilter, addFilter }) => {
  return (
    <div className="filter-item">
      <input
        type="radio"
        name="subCategory"
        id="allCats"
        onChange={resetFilter}
      />
      <label htmlFor="allCats" className="categories-title">
        ALL CATEGORIES
      </label>

      {categoryId !== 'else' &&
        subCategories.map((subcat, index) => (
          <div className="input-item" key={index}>
            <input
              type="radio"
              name="subCategory"
              id={index + 1}
              value={subcat}
              onChange={addFilter}
            />
            <label htmlFor={index + 1}>{subcat}</label>
          </div>
        ))}
    </div>
  )
}

export default Categories
