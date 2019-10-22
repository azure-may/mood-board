import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Post = props => {
  const post = props.post
  const id = props.post.id
  const index = props.index
  console.log(post, id, index)
  const numComments = props.comments[id] ? props.comments[id].length : 0
    return (
      <figure className='figure'>
        <Link to={`/show/${props.index}`} id={id} index={index} post={post}><img className='photo' src={post.imageLink} alt={post.description}/></Link>
        <figcaption><p>{post.description}</p></figcaption>
        <div className='button-container'>
          <button onClick={() => {
            props.removePost(props.index)
            props.history.push('/')
          }}>Remove</button>
        <Link className='button' to={`/show/${props.index}`}>
          <div className='comment-count'>
            <div className='speech-bubble'></div>
            {numComments}
          </div>
        </Link>
        </div>
      </figure>
)}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post