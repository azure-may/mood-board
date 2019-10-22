import {database} from '../database/config'

// fetch posts from database
export function startLoadingPosts(){
  return dispatch => {
    return database.ref('posts').once('value')
      .then( snapshot => {
        const posts = []
        snapshot.forEach( entry => {
          posts.push(entry.val())
        })
        dispatch(loadPosts(posts))
      })
  }
}

// update database
export function startAddingPost(post){
  return dispatch => {
    return database.ref('posts').update({[post.id]: post})
      .then( () => dispatch(addPost(post)) )
      .catch( error => console.log(error) )
  }
}

export function startRemovingPost(index, id){
  return dispatch => {
    return database.ref(`posts/${id}`).remove()
      .then( () => dispatch(removePost(index)) )
      .catch( error => console.log(error) )
  }
}

export function startAddingComment(comment, postId){
  return dispatch => {
    return database.ref(`comments/${postId}`).push(comment)
      .then( () => dispatch(addComment(comment)) )
      .catch( error => console.log(error) )
  }
}

// load posts from database
export function loadPosts(posts){
  return {
    type: 'LOAD_POSTS',
    posts
  }
}

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