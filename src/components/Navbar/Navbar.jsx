import React from 'react'
import { useLocation } from 'react-router-dom'
import { RiArrowDownSLine } from 'react-icons/ri'
import { BiSearch, BiUser, BiHeart, BiShoppingBag } from 'react-icons/bi'
import { MdLanguage } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ShoppingBag from '../ShoppingBag/ShoppingBag'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import './Navbar.scss'
import { useSelector } from 'react-redux'

const Menu = () => {
  return (
    <>
      <div className="app__navbar-left_link">
        <Link to="/category/men">Men</Link>
      </div>
      <div className="app__navbar-left_link">
        <Link to="/category/women">Women</Link>
      </div>
      <div className="app__navbar-left_link">
        <Link to="/category/else">Else</Link>
      </div>
    </>
  )
}

const Currency = () => {
  return (
    <div className="app__navbar-left_currency">
      <select defaultValue="USD">
        <option disabled>USD</option>
        <option disabled>EUR</option>
        <option disabled>GBP</option>
      </select>
    </div>
  )
}

const Language = () => {
  return (
    <div className="app__navbar-left_language">
      <MdLanguage />
      <RiArrowDownSLine />
    </div>
  )
}

const Navbar = () => {
  const [openCart, setOpenCart] = React.useState(false)
  const products = useSelector((state) => state.cart.products)
  const [toggleMenu, setToggleMenu] = React.useState(false)

  const { pathname } = useLocation()

  React.useEffect(() => {
    setOpenCart(false)
    setToggleMenu(false)
  }, [pathname])

  return (
    <div className="app__navbar">
      <div className="app__navbar-menu">
        <AiOutlineMenu
          className="hamburger-icon"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-menu_overlay scale-up-tl">
            <AiOutlineClose
              className="close-icon"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="navbar-menu_container-user">
              <>
                <Link to={'/wishlist'}>Wishlist</Link>
              </>
              <>
                <Link to={'/login'}>Account - Login</Link>
              </>
            </div>
            <Currency />
            <Language />
          </div>
        )}
      </div>
      <div className="app__navbar-left">
        <Language />
        <Currency />
        <Menu />
      </div>

      <div className="app__navbar-logo">
        <Link to="/">
          <h1>OUTRO</h1>
        </Link>
      </div>

      <div className="app__navbar-right">
        <div className="app__navbar-right_icons">
          <Link to={'/search'}>
            <BiSearch className="search-icon" />
          </Link>
          <Link to={'/profile'}>
            <BiUser className="profile-icon" />
          </Link>
          <Link to={'/wishlist'}>
            <BiHeart className="wishlist-icon" />
          </Link>
          <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
            <BiShoppingBag className="bag-icon" />
            <span>{products.length}</span>
          </div>
        </div>
      </div>
      {openCart && <ShoppingBag togglebag={() => setOpenCart(false)} />}
    </div>
  )
}

export default Navbar
