import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function MoodBoard(props) {
  return <div>
      <Link className='addIcon' to='/AddPhoto' > </Link>
      <div className='post-grid'>
        {props.posts
          .sort(function(x,y){
              return y.id - x.id
          })
          .map((post, index) => <Post key={index} post={post} {...props} index={index} />)
        }
      </div>
    </div>
}

MoodBoard.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default MoodBoard