import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const MoodBoard = props => {
  return (
    <div>
      <Link className='addIcon' to='/add-photo' ></Link>
      <div className='post-grid'>
        {
          props.posts
          .map((post, index) => <Post key={index} post={post} index={index} id={post.id} {...props} />)
        }
      </div>
    </div>
  )
}

MoodBoard.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default MoodBoard