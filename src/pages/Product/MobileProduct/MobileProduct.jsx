import React from 'react'
import { useDispatch } from 'react-redux'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { addToBag } from '../../../redux/cartReducer'

import './MobileProduct.scss'

const MobileProduct = ({ data }) => {
  const scrollRef = React.useRef(null)
  const dispatch = useDispatch()

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 200
    } else {
      current.scrollLeft += 200
    }
  }

  return (
    <div className="product_mobile-container">
      <div className="product_mobile-images">
        <div className="product_mobile-images_content" ref={scrollRef}>
          <div className="image-wrapper_mobile">
            <img src={data.coverImg} alt="product" />
          </div>
          <div className="image-wrapper_mobile">
            <img src={data.coverImg2} alt="product" />
          </div>
          <div className="image-wrapper_mobile">
            <img src={data.extraImg} alt="product" />
          </div>
        </div>
        <div className="product_image-column_buttons">
          <BsArrowLeft className="arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRight
            className="arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>

      <div className="product_mobile-desc">
        <div className="product_mobile-desc-top">
          <div className="product_mobile-desc-top_container">
            <h1 style={{ background: 'yellow' }}>{data.brand}</h1>
            <span
              style={{
                background: 'rgb(81, 255, 0)',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              ${data.price} {data.onSale && <span>${data.oldPrice}</span>}
            </span>
          </div>
          <span className="product-title">{data.title}</span>
        </div>

        <div className="product_mobile_desc-size">
          <select defaultValue="size" required>
            <option value="size" disabled={true}>
              SELECT A SIZE
            </option>
            {data.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="product_mobile_desc-buttons">
            <button
              className="product_btn-bag"
              type="button"
              onClick={() =>
                dispatch(
                  addToBag({
                    id: data.id,
                    title: data.title,
                    brand: data.brandText,
                    img: data.coverImg,
                    price: data.price,
                  })
                )
              }
            >
              ADD TO BAG
            </button>
            <button
              style={{ color: '#000' }}
              className="product_btn-wishlist"
              type="button"
            >
              ADD TO WISHLIST
            </button>
          </div>
        </div>

        <div className="product_mobile-desc_info">
          <br />
          <span>{data.desc}</span>
          <br />
          <span>Suplied color: {data.color}.</span>
          <br />
          <span>{data.materials}</span>
          <br />
          <span>Made in {data.country}.</span>
          <br />
        </div>
      </div>
    </div>
  )
}

export default MobileProduct
