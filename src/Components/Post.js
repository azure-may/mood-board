import React from 'react'
import PropTypes from 'prop-types'
const Post = props => {
  const post = props.post;
    return (
      <figure className='figure'>
        <img className='photo' src={post.imageLink} alt={post.description}/>
        <figcaption><p>{post.description}</p></figcaption>
        <div className='button-container'>
          <button onClick={() => {
            props.removePost(props.index)
          }}>Remove</button>
        </div>
      </figure>
)}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post