// remove post
export function removePost(index){
  return {
    type: 'REMOVE_POST',
    index
  }
}

// add post
export function addPost(post){
  return {
    type: 'ADD_POST',
    post
  }
}

// add comment
export function addComment(comment, postId){
  return {
    type: 'ADD_COMMENT',
    comment,
    postId
  }
}