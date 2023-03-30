import React from 'react'
import { Navbar } from '../../components'
import { Link } from 'react-router-dom'

import './ErrorPage.scss'

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="errorPage_container">
        <div className="monkey-gif">
          <Link to={'/'}>
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDlmMzhiZDViODdkMTE3YWU1YzBjYjRkNjdiMGNhNTllOGMyMDE2ZSZjdD1n/8lcXQRf7iYBv9JX23R/giphy.gif"
              alt="monkey"
            />
          </Link>
        </div>
        <div className="errorPage_text">
          <h1>404</h1>
          <p>THIS PAGE IS UNDER DEVELOPMENT (OR NOT)</p>
          <p>
            TRY TO VISIT SOMETHING ELSE{' '}
            <span style={{ fontSize: '2rem' }}>😁 🤕</span>
          </p>
        </div>
        <div className="monkey-gif">
          <img
            src="https://static.wixstatic.com/media/5922a2_e99096c245a8472481e409475b653d8a~mv2.gif"
            alt="monkey"
          />
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
