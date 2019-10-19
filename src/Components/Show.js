import React from 'react'
import Post from './Post'
import Comments from './Comments'

const Show = props => {
  const {match, posts} = props
  const id = Number(match.params.id)
  const post = posts[id]
  const comments = props.comments[id] || []
    return (
      <div className='single-photo'>
        <Post post={post} index={id} {...props}/>
        <Comments addComment={props.addComment} comments={comments} id={id}/>
      </div>
)}

export default Show