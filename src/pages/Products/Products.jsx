import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsRow, Brands, Categories, PriceRange, Sort } from './components'
import { brands as brandList } from '../../data/brands/brands'
import { subCategories } from '../../data/subCategories/subCategories'
import svg4 from '../../assets/svgs/svg4.svg'

import './Products.scss'

const Products = () => {
  const categoryId = useParams().id
  const [maxPrice, setMaxPrice] = React.useState(1500)
  const [selectedCats, setSelectedCats] = React.useState(subCategories)
  const [brands, setBrand] = React.useState(brandList[categoryId])
  const [sort, setSort] = React.useState()
  const [toggleFilters, setToggleFilters] = React.useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    if (isChecked) {
      return setSelectedCats([value])
    }
  }

  console.log(selectedCats)

  const filterBrands = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    if (isChecked) {
      return setBrand([value])
    }
  }

  console.log(brands)

  const handleClick = () => {
    setToggleFilters(!toggleFilters)
    console.log(toggleFilters)
  }

  React.useEffect(() => {
    setMaxPrice(maxPrice)
    setSelectedCats(subCategories)
    setBrand(brandList[categoryId])
    // const [sort, setSort] = React.useState()
    setToggleFilters(false)
  }, [categoryId])

  return (
    <main>
      <div className="wrapper">
        <div className="smallscreen-filters_container">
          <div className="smallscreen-filters_btn">
            <button onClick={handleClick}>FILTERS</button>
          </div>
          {toggleFilters && (
            <div className="smallscreen-filters_overlay">
              <div className="smallscreen-filters_content">
                <div className="close-btn">
                  <button style={{ color: '#000' }} onClick={handleClick}>
                    CLOSE
                  </button>
                </div>
                <div className="smallscreen-filters_items">
                  <Categories
                    categoryId={categoryId}
                    resetFilter={() => setSelectedCats([])}
                    addFilter={handleChange}
                  />
                  <PriceRange
                    maxPrice={maxPrice}
                    setMaxPrice={(e) => setMaxPrice(e.target.value)}
                  />
                  {/* <Sort
                    sortDef={(e) => setSort('sort=publishedAt:desc')}
                    sortLow={(e) => setSort('sort=price:asc')}
                    sortHigh={(e) => setSort('sort=price:desc')}
                  /> */}
                  <Brands
                    categoryId={categoryId}
                    resetFilter={(e) => setBrand([])}
                    addFilter={filterBrands}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="left-column">
          <Categories
            categoryId={categoryId}
            resetFilter={() => setSelectedCats(subCategories)}
            addFilter={handleChange}
          />
          <PriceRange
            maxPrice={maxPrice}
            setMaxPrice={(e) => setMaxPrice(e.target.value)}
          />
          {/* <Sort
            // sortDef={() => setSort((a, b) => a - b)}
            sortLow={() => setSort((a, b) => a - b)}
            sortHigh={() => setSort('sort=price:desc')}
          /> */}
          <Brands
            categoryId={categoryId}
            resetFilter={(e) => setBrand(brandList[categoryId])}
            addFilter={filterBrands}
          />
          <img className="svg" src={svg4} alt="" />
        </div>
        <div className="products-column">
          <ProductsRow
            categoryid={categoryId}
            maxprice={maxPrice}
            sort={sort}
            subcats={selectedCats}
            brands={brands}
          />
        </div>
      </div>
    </main>
  )
}

export default Products
