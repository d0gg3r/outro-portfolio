import React from 'react'
import { Link } from 'react-router-dom'

import './ArticleThumb.scss'

const ArticleThumb = ({ item }) => {
  return (
    <>
      <Link to={`/journal/${item.id}`} className='app__articleThumb-container'> 
        <div className="app__articleThumb-container_img">
          <img src={item.thumbImg} alt='Article Thumbnail' />
        </div>
        <div className="app__articleThumb-container_content">
          <h4>{item.title}</h4>
          <span>{item.category}</span>
        </div>
      </Link>
    </>
  )
}

export default ArticleThumb