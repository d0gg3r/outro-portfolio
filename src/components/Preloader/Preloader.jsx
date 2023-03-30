import React from 'react'
import svg5 from '../../assets/svgs/svg5.svg'

import './Preloader.scss'

const Preloader = () => {
  return (
    <div className="preloader">
      <img className="preloader-img ping" src={svg5} alt="" />
      <h1 className="preloader-text text-flicker-out-glow">LOADING...</h1>
    </div>
  )
}

export default Preloader
