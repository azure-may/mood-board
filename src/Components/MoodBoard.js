import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Photowall = props => {
  return (
    <div>
      <Link className='addIcon' to='/add-photo' ></Link>
      <div className='post-grid'>
        {props.posts
          .map((post, index) => <Post key={index} post={post} {...props} index={index}/>)}
      </div>
    </div>
  )
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Photowall