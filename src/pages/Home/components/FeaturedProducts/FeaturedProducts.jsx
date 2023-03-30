import React from 'react'
import { CardItem } from '../../../../components'
import { Link } from 'react-router-dom'
// import useFetch from '../../../../hooks/useFetch'
import { data } from '../../../../data/clothing/data'

import './FeaturedProducts.scss'

const FeaturedProducts = ({ type }) => {
  const featuredItems = data.filter((item) => item.type === 'featured')

  return (
    <div className="app__featuredProducts">
      <div className="app__featuredProducts-heading">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          explicabo enim distinctio animi est officia, corporis recusandae,
          molestiae pariatur amet iste illo debitis beatae architecto incidunt
          nemo ad odit illum.
        </p>
      </div>

      <div className="app__featuredProducts-content">
        {featuredItems.map((item) => (
          <CardItem item={item} key={item.id} />
        ))}
      </div>
      <div className="app__featuredProducts-buttons">
        <div>
          <Link to="/category/men">SHOP MENSWEAR</Link>
        </div>
        <div>
          <Link to="/category/women">SHOP WOMENSWEAR</Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
