import React from 'react'

const Sort = ({ sortLow, sortHigh, sortDef }) => {
  return (
    <div className="filter-item">
      <input
        type="radio"
        name="price"
        value="def"
        id="def"
        onChange={sortDef}
      />
      <label htmlFor="def">
        <h2>SORT</h2>
      </label>
      <input type="radio" id="asc" value="asc" name="price" onClick={sortLow} />
      <label htmlFor="asc">PRICE: LOW TO HIGH</label>

      <input
        type="radio"
        id="desc"
        value="desc"
        name="price"
        onClick={sortHigh}
      />
      <label htmlFor="desc">PRICE: HIGH TO LOW</label>
    </div>
  )
}

export default Sort
