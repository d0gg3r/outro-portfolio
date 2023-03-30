import React from 'react'
import { Link } from 'react-router-dom'
import mens from '../../assets/header_mens.webp'
import womens from '../../assets/header_womens.webp'
import { Ticker } from '../../components'
import ArticleRow from './components/ArticleRow/ArticleRow'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Newsletter from './components/Newsletter/Newsletter'
import svg1 from '../../assets/svgs/svg1.svg'
import svg2 from '../../assets/svgs/svg2.svg'
import svg3 from '../../assets/svgs/svg3.svg'

import './Home.scss'

const Home = () => {
  return (
    <>
      <Ticker />
      <div className="app__home">
        <div className="app__home-header">
          <Link
            to="/category/men"
            className="app__home-header_title text-focus-in"
          >
            The <span style={{ fontWeight: '700' }}>Latest</span> Campaign
            <img className="app__home-header_svg" src={svg3} alt="" />
          </Link>
          <div className="app__home-header_categories">
            <div className="app__home-header_men bounce-in-left">
              <Link to="/category/men" style={{ background: 'red' }}>
                <h1>MENSWEAR</h1>
              </Link>
              <Link to="/category/men">
                <img src={mens} alt="mens category" />
              </Link>
            </div>
            <div className="app__home-header_women bounce-in-right">
              <Link to="/category/women" style={{ background: 'red' }}>
                {/* <img src={svg1} alt="" /> */}
                <h1>WOMENSWEAR</h1>
              </Link>
              <Link to="/category/women">
                <img src={womens} alt="womens category" />
              </Link>
            </div>
          </div>
        </div>
        <FeaturedProducts type="featured" />
        <ArticleRow />
        <Newsletter />
      </div>
    </>
  )
}

export default Home
