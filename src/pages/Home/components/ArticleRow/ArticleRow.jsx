import React from 'react'
import { Link } from 'react-router-dom'
import ArticleThumb from '../ArticleThumb/ArticleThumb'

import './ArticleRow.scss'

const ArticleRow = () => {
  const data = [
    {
      title: 'Personal Space with Josh Itiola',
      thumbImg: 'https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1647452231/e9fr0eotztm7xdu4cx9h.jpg',
      category: 'Culture',
      id: 0
    },
    {
      title: 'Attachment Theory: A Strong Case for Soft Collars',
      thumbImg: 'https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1652146773/fibjel8rg0ovcc8srrs4.jpg',
      category: 'Fashion',
      id: 1
    },
    {
      title: 'Give the Gift of Good Graphics',
      thumbImg: 'https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1671036640/mjq3zzvvhdbruktjdjkz.jpg',
      category: 'Market',
      id: 2
    },
    {
      title: 'The Makings of Asake',
      thumbImg: 'https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1673884963/fo76afsbjbixxnxxor1f.jpg',
      category: 'Music',
      id: 3
    },
  ]
  return (
    <div className='app__articleRow'>
      <div className="app__articleRow-container">
        <Link to='/journal' className='app__articleThumb-container journal'>
          <h4>THE LATEST</h4>
          <span>VIEW ALL STORIES</span>
        </Link>
        {data.map(item => (
          <ArticleThumb item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default ArticleRow