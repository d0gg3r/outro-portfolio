import React from 'react'
import { data as allData } from '../../data/clothing/data'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import MobileProduct from './MobileProduct/MobileProduct'
import { Newsletter } from '../Home/components'

import './Product.scss'
import { addToBag } from '../../redux/cartReducer'

const Product = () => {
  const id = useParams().id
  const dispatch = useDispatch()
  const data = allData.filter((item) => item.id === id)

  return (
    <div className="app__product">
      <MobileProduct data={data[0]} />
      <div className="desktop">
        <div className="product_desc-column">
          <h1 style={{ background: 'yellow' }}>{data[0].brand}</h1>
          <span className="product-title">{data[0].title}</span>
          <br />
          <span>{data[0].desc}</span>
          <br />
          <span>Suplied color: {data[0].color}.</span>
          <br />
          <span>{data[0].materials}</span>
          <br />
          <span>Made in {data[0].country}.</span>
          <br />
        </div>

        <div className="product_image-column">
          <div className="product_image-column_img">
            <div className="image-wrapper">
              <img src={data[0].coverImg} alt="product" />
            </div>
            <div className="image-wrapper">
              <img src={data[0].coverImg2} alt="product" />
            </div>
            <div className="image-wrapper">
              <img src={data[0].extraImg} alt="product" />
            </div>
          </div>
        </div>

        <div className="product_price-column">
          <span
            style={{
              background: 'rgb(81, 255, 0)',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            ${data[0].price}{' '}
            {data[0].onSale && <span>${data[0].oldPrice}</span>}
          </span>
          <select defaultValue="size" required>
            <option value="size" disabled={true}>
              SELECT A SIZE
            </option>
            {data[0].sizes?.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="product_right-column_btn">
            <button
              className="product_btn-bag"
              type="button"
              onClick={() =>
                dispatch(
                  addToBag({
                    id: data[0].id,
                    title: data[0].title,
                    brand: data[0].brandText,
                    img: data[0].coverImg,
                    price: data[0].price,
                  })
                )
              }
            >
              ADD TO BAG
            </button>
            <button className="product_btn-wishlist" type="button">
              ADD TO WISHLIST
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

export default Product
