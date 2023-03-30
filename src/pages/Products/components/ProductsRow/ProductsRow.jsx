import React from 'react'
import { CardItem } from '../../../../components'
import useFetch from '../../../../hooks/useFetch'
import { data } from '../../../../data/clothing/data'

import './ProductsRow.scss'

const ProductsRow = ({ subcats, maxprice, sort, categoryid, brands }) => {
  const items = data
    .filter(
      (item) =>
        item.categories === categoryid &&
        item.price <= maxprice &&
        subcats.includes(item.sub_categories) &&
        brands.includes(item.brand)

      // brands.includes(item.brand)
      // item.brand === brands
    )
    .reverse()
  // console.log(items)

  return (
    <div className="products-row">
      {items.map((item) => (
        <CardItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default ProductsRow
