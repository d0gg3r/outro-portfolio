import React from 'react'

import './Newsletter.scss'

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-heading">
        <h3>
          Subscribe <span>for</span> our updates
        </h3>
      </div>
      <div className="app__newsletter-input">
        <input id='email' type='email' placeholder='Email Adress'/>
        <button type='button'>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Newsletter