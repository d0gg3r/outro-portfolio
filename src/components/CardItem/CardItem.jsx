import React from 'react'
import { Link } from 'react-router-dom'

import './CardItem.scss'

const CardItem = ({ item }) => {
  return (
    <div className="app__cardItem">
      <Link to={`/item/${item.id}`}>
        <div className="app__cardItem-images">
          <img src={item.coverImg} alt="product" className="mainImg" />
          <img
            src={item.coverImg2}
            alt="product on hover"
            className="secondImg"
          />
        </div>
        <div className="app__cardItem-describe">
          <div>
            <p className="brand">{item.brand}</p>
          </div>
          <div>
            <p className="title">{item.title}</p>
          </div>
          <div>
            <p className="price">
              ${item.price} {item.onSale && <span>${item.oldPrice}</span>}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardItem
