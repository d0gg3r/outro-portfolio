import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../redux/cartReducer'
import { GoEyeClosed } from 'react-icons/go'

import './ShoppingBag.scss'

const ShoppingBag = ({ togglebag }) => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()
  console.log(products)

  const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.price))
    return total.toFixed(2)
  }

  return (
    <div className="app__bag">
      <div className="app__bag-title">
        <div className="close-icon">
          <GoEyeClosed onClick={togglebag} />
        </div>
        <h1 style={{ flex: '1' }}>SHOPPING BAG</h1>
        <div style={{ flex: '0.5' }}></div>
      </div>
      <div className="app__bag-container">
        <div className="app__bag-container_header">
          <div className="app__bag-container_header-title">
            <p>ITEM</p>
          </div>
          <div className="app__bag-container_header-total">
            <p>TOTAL</p>
          </div>
        </div>

        <div className="app__bag-container_items">
          {products.map((item) => (
            <div className="app__bag-item" key={item.id}>
              <div className="app__bag-item_img">
                <img src={item.img} alt="item" />
              </div>
              <div className="app__bag-item_description">
                <div>
                  <p>{item.brand}</p>
                  <p>{item.title}</p>
                </div>
                <div>
                  <button type="button">Move to Wishlist</button>
                </div>
              </div>
              <div className="app__bag-item_price">
                <div>
                  <p>{item.price} USD</p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={(e) => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="app__bag-item_total">
            <div className="app__bag-item_total-line">
              <p>Total</p>
              <p>${totalPrice()} USD</p>
            </div>
            <div className="app__bag-item_total-line">
              <p>Shipping estimate</p>
              <p>Calculate at Checkout</p>
            </div>
            <div className="app__bag-item_total-line">
              <p style={{ fontWeight: '600', fontSize: '0.75rem' }}>
                Order Total
              </p>
              <p style={{ fontWeight: '600', fontSize: '0.75rem' }}>
                ${totalPrice()} USD
              </p>
            </div>
          </div>
        </div>

        <div className="app__bag-container_total">
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingBag
